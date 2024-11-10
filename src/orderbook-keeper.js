const pkg = require('@dydxprotocol/v4-client-js');
const {
  CompositeClient,
  Network,
  SocketClient,
  IndexerConfig,
  ValidatorConfig,
} = pkg;

// Endpoints
const WEBSOCKET_URL = "backend.roxom.klyra.com/ws";
const REST_URL = "backend.roxom.klyra.com/rest";
const VALIDATOR_RPC = "node.roxom.klyra.com";

class OrderbookKeeper {
  constructor(options) {
    this.client = null;
    this.socketClient = null;
    this.orderbook = {}; // nested map: {marketId: {asks: {price: size}, bids: {price: size}}}
    this.totalAskSize = {}; // map from market to total ask size
    this.totalBidSize = {}; // map from market to total bid size
    this.lowestAskPrice = {}; // map from market to lowest ask price
    this.highestBidPrice = {};
    this.markets = options.markets ?? [
      "AAPL-BTC",
      "NVDA-BTC",
      "TSLA-BTC"
    ];
  }

  async initialize() {
    const compositNetwork = new Network(
      "dydx-",
      new IndexerConfig("https://" + REST_URL, "wss://" + WEBSOCKET_URL),
      new ValidatorConfig(
        "https://" + VALIDATOR_RPC,
        "localdydxprotocol",
        {
          USDC_DENOM: "ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5",
          USDC_DECIMALS: 6,
          USDC_GAS_DENOM: "uusdc",
          CHAINTOKEN_DENOM: "adv4tnt",
          CHAINTOKEN_DECIMALS: 18,
        }
      )
    )
    this.client = await CompositeClient.connect(
      compositNetwork
    );

    const indexerConfig = new IndexerConfig("https://" + REST_URL, "wss://backend.roxom.klyra.com/ws/v4/ws")

    this.socketClient = new SocketClient(
      indexerConfig,
      () => {
        console.log('socket opened');
        this.markets.forEach(market => {
          this.socketClient.subscribeToOrderbook(market);
          console.log(`Subscribed to orderbook for market: ${market}`);
        });
      },
      () => {
        console.log('socket closed');
      },
      (message) => {
        this.UpdateOrderbookState(message);
      },
      (error) => {
        console.error('WebSocket error:', error);
      }
    )

    this.socketClient.connect();
  }

  UpdateOrderbookState(message) {
    if (!message.data) {
      return;
    }

    const parsedMessageData = JSON.parse(message.data);
    const messageType = parsedMessageData.type;

    if (messageType !== 'subscribed' && messageType !== 'channel_batch_data') {
      return;
    }

    if (!parsedMessageData.contents) {
      return;
    }

    if (messageType === 'subscribed') {
      this.parseSubscribedMessageType(parsedMessageData);
    } else if (messageType === 'channel_batch_data') {
      this.parseChannelBatchDataMessageType(parsedMessageData);
    }

    //console.log("Succesfully updated orderbook for market id ", parsedMessageData.id);
  }

  parseSubscribedMessageType(parsedMessageData) {
    if (!parsedMessageData.id) {
      return;
    }

    const marketId = parsedMessageData.id;

    if (parsedMessageData.contents.asks) {
      const asks = parsedMessageData.contents.asks;
      this.updateAsks(marketId, asks);
    }

    if (parsedMessageData.contents.bids) {
      const bids = parsedMessageData.contents.bids;
      this.updateBids(marketId, bids);
    }

  }

  parseChannelBatchDataMessageType(parsedMessageData) {
    if (!parsedMessageData.id || !parsedMessageData.contents || parsedMessageData.contents.length === 0) {
      return;
    }

    const marketId = parsedMessageData.id;
    const parsedContent = this.parseChannelBatchDataOrderbookContent(parsedMessageData.contents);
    if (parsedContent.bids) {
      this.updateBids(marketId, parsedContent.bids);
    }
    if (parsedContent.asks) {
      this.updateAsks(marketId, parsedContent.asks);
    }

  }

  parseChannelBatchDataOrderbookContent(contents) {
    const result = { bids: [], asks: [] };

    for (const item of contents) {
      if (item.bids) {
        result.bids = item.bids.map(([price, size]) => ({ price: String(price), size: String(size) }));
      }
      if (item.asks) {
        result.asks = item.asks.map(([price, size]) => ({ price: String(price), size: String(size) }));
      }
    }

    return result;
  }

  updateAsks(marketId, newAsks) {
    if (!this.orderbook[marketId]) {
      this.orderbook[marketId] = { asks: {}, bids: {} };
    }
    const currAsks = this.orderbook[marketId].asks || {};
    const updatedAsks = this.createNewBidsOrAsksMap(newAsks, currAsks);

    this.orderbook[marketId].asks = updatedAsks;
    this.totalAskSize[marketId] = Object.values(updatedAsks).reduce((sum, size) => sum + size, 0);
    this.lowestAskPrice[marketId] = Math.min(...Object.keys(updatedAsks).map(Number));
  }

  updateBids(marketId, newBids) {
    if (!this.orderbook[marketId]) {
      this.orderbook[marketId] = { asks: {}, bids: {} };
    }
    const currBids = this.orderbook[marketId].bids || {};
    const updatedBids = this.createNewBidsOrAsksMap(newBids, currBids);
    this.orderbook[marketId].bids = updatedBids;
    this.totalBidSize[marketId] = Object.values(updatedBids).reduce((sum, size) => sum + size, 0);
    this.highestBidPrice[marketId] = Math.max(...Object.keys(updatedBids).map(Number));
  }

  createNewBidsOrAsksMap(newOrders, currOrders) {
    for (const order of newOrders) {
      const price = Number(order.price);
      const size = parseFloat(order.size);
      if (order.size === '0') {
        delete currOrders[price];
      } else {
        currOrders[price] = size;
      }
    }
    return currOrders;
  }

  GetOrderbookForMarket(marketId) {
    return this.orderbook[marketId];
  }

  GetBidsForMarket(marketId) {
    return this.orderbook[marketId].bids;
  }

  GetAsksForMarket(marketId) {
    return this.orderbook[marketId].asks;
  }

  GetTotalAskSizeForMarket(marketId) {
    return this.totalAskSize[marketId];
  }

  GetTotalBidSizeForMarket(marketId) {
    return this.totalBidSize[marketId];
  }

  GetLowestAskPriceForMarket(marketId) {
    return this.lowestAskPrice[marketId];
  }

  GetHighestBidPriceForMarket(marketId) {
    return this.highestBidPrice[marketId];
  }
}

module.exports = OrderbookKeeper;