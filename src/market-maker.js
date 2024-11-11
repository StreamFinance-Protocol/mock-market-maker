const pkg = require('@dydxprotocol/v4-client-js');
const {
  CompositeClient,
  Network,
  SocketClient,
  LocalWallet,
  SubaccountClient,
  IndexerConfig,
  ValidatorConfig,
  OrderSide,
  Order_TimeInForce,
} = pkg;

const crypto = require('crypto');
const { randomInt } = crypto;
const PriceFetcher = require('./price-fetcher');


// NGROK Endpoints
const WEBSOCKET_URL = "backend.roxom.klyra.com/ws/v4/ws";
const REST_URL = "backend.roxom.klyra.com/rest";
const VALIDATOR_RPC = "node.roxom.klyra.com";

// Market Making account constants
const MM_MNEMONIC_1 = "horse pulse cool music mimic desk blind party potato carry author dynamic first dose museum proud please sorry transfer slide sentence glory civil believe";
const MM_MNEMONIC_2 = "expand often gallery dwarf canoe maid month power misery business cargo egg range stage purpose rebel fault anchor organ hope trade solve gaze absent";
const MM_MNEMONIC_3 = "tide neither odor extend deposit forward apology decline oval peace scout trash depart swim face chapter fatal combine general sausage humor puppy fitness harbor";
const MM_MNEMONIC_4 = "cabbage kick meat phone upgrade account swing check beauty click pistol term divorce resource engage vault ten person recipe relax giraffe census cactus treat";
const MM_MNEMONIC_5 = "wealth episode void top solution brother dolphin gift balcony art develop beauty razor walnut valve route main mutual whale mad offer blame element innocent";

const mnenomicToAddy = {
  [MM_MNEMONIC_1]: "dydx1mn3gs6d48z2pntkl6mhmrvkwvayalkxp7nsgeg",
  [MM_MNEMONIC_2]: "dydx1n25kyyvzyxg3at2q8cys3hvgu3m56h98sytza4",
  // [MM_MNEMONIC_3]: "dydx1zpnrq93fqrtnlenxtwusp9ahq4dxuumq078l8c",
  // [MM_MNEMONIC_4]: "dydx1hgwu3tkw8txkavxkksds2y2ljux4yx0p7afvc3",
}
// Constants for placing orders
const MAX_CLIENT_ID = 2 ** 32 - 1;
const DEFAULT_GOOD_TIL_BLOCK_BLOCK_BUFFER = 18;
const DEFAULT_BASE_ORDER_SIZE = 725;
const DEFAULT_SPREADS = [0.00001, 0.00003, 0.00008, 0.00015, 0.0003, 0.00075, 0.0015, 0.004, 0.009, 0.025, 0.08, 0.145];
const NVDA_SPREADS = [0.0001, 0.0002, 0.0003, 0.0005, 0.0008, 0.0013, 0.0022, 0.0035, 0.0057, 0.0092, 0.0149, 0.1];
const DEFAULT_SIZE_FACTORS = Array.from({ length: 12 }, (_, i) => Number((1.4 ** i).toFixed(2)));

// Market Maker Class
class BidAskSpreadMarketMaker {
  constructor(options) {
    this.priceFetcher = options.priceFetcher;
    this.loopWaitTime = options.loopWaitTime || 15000;
    this.goodTilBlockBuffer = options.goodTilBlockBuffer || 10;
    this.mnemonic = options.mnemonic;
    this.baseOrderSize = options.baseOrderSize || 100;
    this.client = null;
    this.socketClient = null;
    this.priceAdjustments = {}; // New property to store price adjustments per market
    this.markets = options.markets || ["BTC-USD", "ETH-USD"]
    this.adjustmentFactor = 0.0001; // Adjust this value to control the magnitude of price changes
    this.maxOrdersPerCycle = options.maxOrdersPerCycle || 8; // New option to limit orders per cycle
    this.marketConfigs = options.marketConfigs || {
      "BTC-USD": { spreads: DEFAULT_SPREADS, sizeFactors: DEFAULT_SIZE_FACTORS },
      "ETH-USD": { spreads: DEFAULT_SPREADS, sizeFactors: DEFAULT_SIZE_FACTORS },
    };

  }

  async initialize() {
    const indexerConfig = new IndexerConfig("https://" + REST_URL, "wss://" + WEBSOCKET_URL)
    const compositNetwork = new Network(
      "dydx-",
      indexerConfig,
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

    this.socketClient = new SocketClient(
      indexerConfig,
      () => {
        console.log('socket opened');
        this.socketClient.subscribeToSubaccount(
          mnenomicToAddy[this.mnemonic],
          0
        )
      },
      () => {
        console.log('socket closed');
      },
      (message) => {
        this.updateFilledOrderState(message);
      },
      (error) => {
        console.error('WebSocket error:', error);
      }
    )

    this.socketClient.connect();

    // Initialize priceAdjustments for all markets to zero
    this.markets.forEach(market => {
      this.priceAdjustments[market] = 0;
    });
  }

  updateFilledOrderState(message) {
    if (message.data) {
      const parsedMessage = JSON.parse(message.data);

      if (parsedMessage.contents && parsedMessage.contents.fills) {
        const fills = parsedMessage.contents.fills;
        if (fills.length !== 0) {
          fills.forEach(fill => {
            const size = parseFloat(fill.size);
            const marketId = fill.ticker;
            if (!this.priceAdjustments[marketId]) {
              this.priceAdjustments[marketId] = 0;
            }
            const weightedAdjustment = Math.min(this.adjustmentFactor * Math.log(size + 1) / Math.log(2), 0.0001);
            if (fill.side === 'SELL') {
              this.priceAdjustments[marketId] += weightedAdjustment;
            } else if (fill.side === 'BUY') {
              this.priceAdjustments[marketId] -= weightedAdjustment;
            }
            console.log(`Price adjustment for ${marketId} updated to: ${this.priceAdjustments[marketId]}`);
          });
        }
      }
    }
  }

  async marketMakeInLoop() {
    while (true) {
      const relevantPrices = await this.fetchRelevantPriceListToMarketMake();
      await this.marketMake(relevantPrices);
      await new Promise(resolve => setTimeout(resolve, this.loopWaitTime));
    }
  }

  async fetchRelevantPriceListToMarketMake() {
    const response = this.priceFetcher.getCurrentPrices();
    const pricesList = Object.entries(response)
      .filter(([id]) => this.markets.includes(id))
      .map(([id, prices]) => ({
        id,
        bidPrice: prices.bidPriceInBtc,
        askPrice: prices.askPriceInBtc
      }));
    return pricesList;
  }

  async marketMake(relevantPrices) {
    for (const priceData of relevantPrices) {
      await this.marketMakeOneMarket(priceData);
    }
  }

  async marketMakeOneMarket(priceData) {
    const marketId = priceData.id;
    const priceAdjustment = this.priceAdjustments[marketId] || 0;
    const meanPrice = (priceData.askPrice + priceData.bidPrice) / 2;
    const adjustedMeanPrice = meanPrice * (1 + priceAdjustment);

    const marketConfig = this.marketConfigs[marketId] || {};
    const spreads = marketConfig.spreads;
    const sizeFactors = marketConfig.sizeFactors;

    for (let i = 0; i < Math.min(spreads.length, this.maxOrdersPerCycle); i++) {
      const spread = spreads[i];  // Add small random variation
      const sizeFactor = sizeFactors[i];
      const bidPrice = Math.floor(adjustedMeanPrice * (1 - spread));
      const askPrice = Math.floor(adjustedMeanPrice * (1 + spread)) + 1;
      if (marketId === "NVDA-BTC") {
        console.log("-------XXXX BID ASK PRICES XXXX----------")
        console.log("spread", spread)
        console.log("Price data bid price ", priceData.bidPrice)
        console.log("Price data ask price ", priceData.askPrice)
        console.log("Bid Price", bidPrice)
        console.log("AskPrice", askPrice)
      }
      const size = this.baseOrderSize * sizeFactor;

      await this.placeOneOrder(marketId, OrderSide.BUY, size, bidPrice);
      await new Promise(resolve => setTimeout(resolve, 100)); // Small delay between orders
      await this.placeOneOrder(marketId, OrderSide.SELL, size, askPrice);
      await new Promise(resolve => setTimeout(resolve, 100)); // Small delay between orders
    }
  }
  async placeOneOrder(marketId, side, size, price) {
    const currBlockHeight = await this.client.validatorClient.get.latestBlockHeight();
    const currGoodTilBlock = currBlockHeight + 1 + this.goodTilBlockBuffer;
    const shortTermOrderClientId = randomInt(MAX_CLIENT_ID);

    const subaccountClient = await buildSubaccountClient(this.mnemonic)

    const scaledPrice = price * (10 ** -9);
    try {
      await this.client.placeShortTermOrder(
        subaccountClient,
        marketId,
        side,
        scaledPrice,
        size,
        shortTermOrderClientId,
        currGoodTilBlock,
        Order_TimeInForce.TIME_IN_FORCE_UNSPECIFIED,
        false,
      );
    } catch (error) {
      console.log(`**Place ${side} Order Failed.**`, error.message);
    }
  }
}

async function buildSubaccountClient(mnemonic) {
  const wallet = await LocalWallet.fromMnemonic(mnemonic, "dydx");
  const subaccountClient = new SubaccountClient(wallet, 0);
  return subaccountClient
}

async function createAndRunMarketMakers(priceFetcher) {
  const marketMakerConfigs = [
    { mnemonic: MM_MNEMONIC_1 },
    { mnemonic: MM_MNEMONIC_2 },
    // { mnemonic: MM_MNEMONIC_3 },
    // { mnemonic: MM_MNEMONIC_4 },
  ];

  const marketMakers = marketMakerConfigs.map(config => new BidAskSpreadMarketMaker({
    priceFetcher,
    loopWaitTime: 15000,
    goodTilBlockBuffer: DEFAULT_GOOD_TIL_BLOCK_BLOCK_BUFFER,
    mnemonic: config.mnemonic,
    baseOrderSize: DEFAULT_BASE_ORDER_SIZE,
    maxOrdersPerCycle: 8,
    markets: ["BTC-USD", "ETH-USD"],
    marketConfig: {
      "BTC-USD": { spreads: DEFAULT_SPREADS, sizeFactors: DEFAULT_SIZE_FACTORS },
      "ETH-USD": { spreads: DEFAULT_SPREADS, sizeFactors: DEFAULT_SIZE_FACTORS },
    }
  }));

  // Initialize all market makers
  await Promise.all(marketMakers.map(mm => mm.initialize()));

  // Start market making loops with delays
  for (let i = 0; i < marketMakers.length; i++) {
    marketMakers[i].marketMakeInLoop();
    if (i < marketMakers.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 3500));
    }
  }
}

// Main execution function
async function main() {
  const priceFetcher = new PriceFetcher();
  priceFetcher.startFetching();
  await new Promise(resolve => setTimeout(resolve, 12000));

  await createAndRunMarketMakers(priceFetcher);
}

main();