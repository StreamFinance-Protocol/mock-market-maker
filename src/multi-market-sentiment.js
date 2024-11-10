const MarketSentiment = require('./market-sentiment');

class MultiMarketSentiment {
    constructor(markets, options = {}) {
        this.marketSentiments = {};
        console.log("Markets ", markets);
        
        markets.forEach(market => {
            const marketOptions = options[market] || {};
            this.marketSentiments[market] = new MarketSentiment(marketOptions);
        });
    }

    getMarketSentimentForMarket(market) {
        if (!this.marketSentiments[market]) {
            throw new Error(`Market sentiment for ${market} not found`);
        }
        return this.marketSentiments[market].getMarketSentiment();
    }
}

module.exports = MultiMarketSentiment;