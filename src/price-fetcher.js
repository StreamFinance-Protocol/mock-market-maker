const axios = require('axios');
require('dotenv').config();
class PriceFetcher {
  constructor() {
    this.state = {
      pricesInBtc: null
    };
    this.intervalId = null;
  }

  async fetchStockPrices() {
    const options = {
      method: 'GET',
      url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=AAPL%2CNVDA%2CMSFT%2CTSLA%2CAMZN%2CGOOG',
      headers: {
        'x-rapidapi-key': '1ec84c531bmsh99bdaf034230c2fp1870afjsn6e1263663732',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      const data = response.data;
      const results = data.quoteResponse.result;

      const prices = {};
      for (const stock of results) {
        prices[this.getProperSymbol(stock.symbol)] = {
          bidPrice: stock.bid,
          askPrice: stock.ask
        };
      }
      return prices;

    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async fetchBtcPrice() {
    try {
      const response = await axios.get(
        "https://pro-openapi.debank.com/v1/token",
        {
          params: {
            chain_id: "eth",
            id: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
          },
          headers: {
            accept: "application/json",
            AccessKey: process.env.DEBANK_API_KEY,
          },
        }
      );

      const btcPrice = response.data.price;

      return { btc: btcPrice };
    } catch (error) {
      console.error("-------- XXXXX Error fetching BTC price XXXXX ----------");
      return { btc: 0 };
    }
  }

  async getStockPriceInBtcTerms() {
    const stockPrices = await this.fetchStockPrices();
    const btcPrice = await this.fetchBtcPrice();

    if (stockPrices && btcPrice && btcPrice.btc) {
      const pricesInBtc = {};
      for (const [symbol, prices] of Object.entries(stockPrices)) {
        pricesInBtc[symbol] = {
          bidPriceInBtc: (prices.bidPrice / btcPrice.btc) * (10 ** 9),
          askPriceInBtc: (prices.askPrice / btcPrice.btc) * (10 ** 9)
        };
      }

      // console.log(pricesInBtc);
      this.state.pricesInBtc = pricesInBtc;
      return pricesInBtc;
    } else {
      console.error("Failed to fetch prices");
      return null;
    }
  }

  getCurrentPrices() {
    return this.state.pricesInBtc;
  }

  getCurrentRandomizedPrices() {
    const currentPrices = this.state.pricesInBtc;
    if (!currentPrices) return null;

    // Generate random basis points between -10 and 10
    const randomBasisPoints = (Math.random() * 20 - 10) / 10000;

    const randomizedPrices = Object.entries(currentPrices).reduce((acc, [symbol, prices]) => {
      acc[symbol] = {
        bidPriceInBtc: prices.bidPriceInBtc * (1 + randomBasisPoints),
        askPriceInBtc: prices.askPriceInBtc * (1 + randomBasisPoints)
      };
      return acc;
    }, {});

    return randomizedPrices;
  }

  getProperSymbol(symbol) {
    if (symbol === "AAPL") {
      return "AAPL-BTC";
    } else if (symbol === "NVDA") {
      return "NVDA-BTC";
    } else if (symbol === "MSFT") {
      return "MSFT-BTC";
    } else if (symbol === "TSLA") {
      return "TSLA-BTC";
    } else if (symbol === "AMZN") {
      return "AMZN-BTC";
    } else if (symbol === "GOOG") {
      return "GOOG-BTC";
    }
  }

  startFetching() {
    this.getStockPriceInBtcTerms();
    this.intervalId = setInterval(() => this.getStockPriceInBtcTerms(), 10000);
  }

  stopFetching() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

module.exports = PriceFetcher;