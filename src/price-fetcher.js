const axios = require('axios');
require('dotenv').config();

class PriceFetcher {
  constructor() {
    this.state = {
      prices: null
    };
    this.intervalId = null;
    this.tokens = {
      btc: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', // WBTC
      eth: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
    };
  }

  async fetchCryptoPrices() {
    try {
      const pricePromises = Object.entries(this.tokens).map(async ([symbol, address]) => {
        const response = await axios.get(
          "https://pro-openapi.debank.com/v1/token",
          {
            params: {
              chain_id: "eth",
              id: address,
            },
            headers: {
              accept: "application/json",
              AccessKey: process.env.DEBANK_API_KEY,
            },
          }
        );
        return [symbol, response.data.price];
      });

      const priceResults = await Promise.all(pricePromises);
      const prices = Object.fromEntries(priceResults);
      this.state.prices = prices;
      return prices;
    } catch (error) {
      console.error("-------- XXXXX Error fetching crypto prices XXXXX ----------");
      console.error(error);
      return Object.fromEntries(Object.keys(this.tokens).map(symbol => [symbol, 0]));
    }
  }
  
  getCurrentPrices() {
    return this.state.prices;
  }

  getCurrentRandomizedPrices() {
    const currentPrices = this.state.prices;
    if (!currentPrices) return null;

    // Generate random basis points between -10 and 10
    const randomBasisPoints = (Math.random() * 20 - 10) / 10000;

    const randomizedPrices = Object.entries(currentPrices).reduce((acc, [symbol, price]) => {
      acc[symbol] = {
        bidPrice: price * (1 - randomBasisPoints),
        askPrice: price * (1 + randomBasisPoints)
      };
      return acc;
    }, {});

    return randomizedPrices;
  }

  startFetching() {
    this.fetchCryptoPrices();
    this.intervalId = setInterval(() => this.fetchCryptoPrices(), 10000);
  }

  stopFetching() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

module.exports = PriceFetcher;