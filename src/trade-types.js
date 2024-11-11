const pkg = require('@dydxprotocol/v4-client-js');
const {
  CompositeClient,
  Network,
  LocalWallet,
  SubaccountClient,
  IndexerConfig,
  ValidatorConfig,
  OrderSide,
  Order_TimeInForce,
} = pkg;

const crypto = require('crypto');
const { randomInt } = crypto;
// Endpoints
const WEBSOCKET_URL = "backend.roxom.klyra.com/ws/v4/ws";
const REST_URL = "backend.roxom.klyra.com/rest";
const VALIDATOR_RPC = "node.roxom.klyra.com";

// Constants for placing orders
const MAX_CLIENT_ID = 2 ** 32 - 1;
const PRICE_ADJUSMENT_DECIMALS = 10 ** -9

class MarketTrader {
  constructor(options) {
    this.client = null;
    this.orderbookKeeper = options.orderbookKeeper;
    this.multiMarketSentiment = options.multiMarketSentiment;
    this.priceFetcher = options.priceFetcher || undefined;
    this.mnemonic = options.mnemonic;
    this.minLoopWaitTime = options.minLoopWaitTime || 10000;
    this.maxLoopWaitTime = options.maxLoopWaitTime || 20000;
    this.baseOrderSize = options.baseOrderSize || 20;
    this.sizeVariation = options.sizeVariation || 0.40; // 40% variation by default
    this.goodTilBlockBuffer = options.goodTilBlockBuffer || 15;
    this.markets = options.markets || ["BTC-USD", "ETH-USD"];
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
  }

  /* Trading Strategies */

  async tradeArbitrageSpot() {
    while (true) {
      await new Promise(resolve => setTimeout(resolve, this.getRandomLoopWaitTime()));
      await this.orderArbitrageSpot();
    }
  }

  async tradeMarketWithSentiment() {
    while (true) {
      await new Promise(resolve => setTimeout(resolve, this.getRandomLoopWaitTime()));
      await this.orderSentiment();
    }
  }

  async tradeBalanceBook() {
    while (true) {
      await new Promise(resolve => setTimeout(resolve, this.getRandomLoopWaitTime()));
      await this.orderBalanceBook();
    }
  }

  async tradeBuyMarket() {
    while (true) {
      await new Promise(resolve => setTimeout(resolve, this.getRandomLoopWaitTime()));
      await this.orderBuyMarket();
    }
  }

  async tradeSellMarket() {
    while (true) {
      await new Promise(resolve => setTimeout(resolve, this.getRandomLoopWaitTime()));
      await this.orderSellMarket();
    }
  }

  async tradeMarketAtRandom(buyLikelihood) {
    while (true) {
      await new Promise(resolve => setTimeout(resolve, this.getRandomLoopWaitTime()));
      this.orderRandom(buyLikelihood);
    }
  }

  /* Order types */

  async orderArbitrageSpot() {
    if (!this.priceFetcher) {
      console.log("Price Fetcher undefined.")
      return;
    }
    const currPrices = this.priceFetcher.getCurrentPrices();
    if (!currPrices) {
      console.log("Curent prices from price fetcher undefined");
      return;
    }

    const marketId = this.getRandomMarket()
    const marketPrices = currPrices[marketId];
    if (!marketPrices) {
      console.log("Market prices from price fetcher could not be found for this traders market.");
      return;
    }

    const orderbookLowestAskPrice = this.orderbookKeeper.GetLowestAskPriceForMarket(marketId);
    const orderbookHighestBidPrice = this.orderbookKeeper.GetHighestBidPriceForMarket(marketId);

    const spotBidPrice = marketPrices.bidPriceInBtc * PRICE_ADJUSMENT_DECIMALS;
    const spotAskPrice = marketPrices.askPriceInBtc * PRICE_ADJUSMENT_DECIMALS;

    console.log("------");
    console.log("orderbook lowest ask price ", orderbookLowestAskPrice);
    console.log("orderbook highest bid ", orderbookHighestBidPrice);
    console.log("orderbook spot bid price ", spotBidPrice);
    console.log("orderbook spot ask price ", spotAskPrice);

    if (orderbookLowestAskPrice < spotBidPrice) {
      console.log("Arbitrage detected: placing buy order");
      await this.orderBuyInputMarket(marketId);
    } else if (orderbookHighestBidPrice > spotAskPrice) {
      console.log("Arbitrage detected: placing sell order");
      await this.orderSellInputMarket(marketId);
    } else {
      console.log("No arbitrage opportunity found");
    }
  }

  async orderSentiment() {
    const marketId = this.getRandomMarket();
    const currSentiment = this.multiMarketSentiment.getMarketSentimentForMarket(marketId);
    switch (currSentiment) {
      case 'positive':
        await this.orderBuyInputMarket(marketId);
        break;
      case 'negative':
        await this.orderSellInputMarket(marketId);
        break;
      case 'neutral':
        // For neutral sentiment, randomly choose buy or sell
        Math.random() < 0.5 ? await this.orderBuyMarket() : await this.orderSellMarket();
        break;
    }
  }

  async orderBalanceBook() {
    const marketId = this.getRandomMarket();
    const totalAskSize = this.orderbookKeeper.GetTotalAskSizeForMarket(marketId);
    const totalBidSize = this.orderbookKeeper.GetTotalBidSizeForMarket(marketId);

    if (totalAskSize > totalBidSize) {
      console.log("Total ask size is greater than total bid size. Placing buy order.");
      await this.orderBuyMarket();
    } else {
      console.log("Total ask size is not greater than total bid size. Placing sell order.");
      await this.orderSellMarket();
    }
  }

  async orderRandom(buyLikelihood) {
    const randomNumber = Math.random() * 100;

    if (randomNumber < buyLikelihood) {
      await this.orderBuyMarket();
    } else {
      await this.orderSellMarket();
    }
  }

  async orderBuyMarket() {
    const marketId = this.getRandomMarket();
    this.orderBuyInputMarket(marketId);
  }

  async orderSellMarket() {
    const marketId = this.getRandomMarket();
    this.orderSellInputMarket(marketId);
  }

  async orderBuyInputMarket(marketId) {
    const lowestAskPrice = this.orderbookKeeper.GetLowestAskPriceForMarket(marketId);
    const randomSize = this.getRandomSize();
    this.placeOneOrder(marketId, OrderSide.BUY, randomSize, lowestAskPrice * 2);
  }

  async orderSellInputMarket(marketId) {
    const highestBidPrice = this.orderbookKeeper.GetHighestBidPriceForMarket(marketId);
    const randomSize = this.getRandomSize();
    this.placeOneOrder(marketId, OrderSide.SELL, randomSize, highestBidPrice / 2);
  }

  async placeOneOrder(marketId, side, size, price) {
    const currBlockHeight = await this.client.validatorClient.get.latestBlockHeight();
    const currGoodTilBlock = currBlockHeight + 1 + this.goodTilBlockBuffer;
    const shortTermOrderClientId = randomInt(MAX_CLIENT_ID);

    const wallet = await LocalWallet.fromMnemonic(this.mnemonic, "dydx");
    const subaccountClient = new SubaccountClient(wallet, 0);

    console.log("-----XXX ORDER XXX----")
    console.log("market id", marketId)
    console.log("side", side)
    console.log("Normal price ", price)
    console.log("size", size)
    try {
      await this.client.placeShortTermOrder(
        subaccountClient,
        marketId,
        side,
        price,
        size,
        shortTermOrderClientId,
        currGoodTilBlock,
        Order_TimeInForce.TIME_IN_FORCE_UNSPECIFIED,
        false,
      );
    } catch (error) {
      console.log(`**Place ${side} Order Failed. Good til block was ${currGoodTilBlock}, good til block buffer was ${this.goodTilBlockBuffer}, and fetched block height ${currBlockHeight}**`, error.message);
    }
  }

  getRandomSize() {
    const minSize = this.baseOrderSize * (1 - this.sizeVariation);
    const maxSize = this.baseOrderSize * (1 + this.sizeVariation);
    return minSize + Math.random() * (maxSize - minSize);
  }

  getRandomMarket() {
    const marketCount = this.markets.length;
    if (marketCount === 0) {
      console.log("No markets available to select from.");
      return null;
    }
    const randomIndex = randomInt(marketCount);
    const marketId = this.markets[randomIndex];
    console.log("RANDOM MARKET ID IS ", marketId);
    return marketId;
  }

  getRandomLoopWaitTime() {
    return Math.floor(Math.random() * (this.maxLoopWaitTime - this.minLoopWaitTime + 1)) + this.minLoopWaitTime;
  }
}

module.exports = MarketTrader;