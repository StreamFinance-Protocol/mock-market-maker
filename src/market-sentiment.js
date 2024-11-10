class MarketSentiment {
    constructor(options = {}) {
      this.currentSentiment = options.currentSentiment || 'neutral';
      this.sentimentChangeDuration = options.sentimentChangeDuration || 60000; // 1 minute in milliseconds
      this.updateInterval = options.updateInterval || 20000; // Check for updates every 20 seconds
      this.lastSentimentChange = Date.now();

      // Start the background update process
      this.startBackgroundUpdate();
    }
  
    startBackgroundUpdate() {
      setInterval(() => {
        this.updateMarketSentiment();
      }, this.updateInterval);
    }
  
    updateMarketSentiment() {
      const now = Date.now();
      if (now - this.lastSentimentChange >= this.sentimentChangeDuration) {
        const sentiments = ['neutral', 'positive', 'negative'];
        this.currentSentiment = sentiments[Math.floor(Math.random() * sentiments.length)];
        this.lastSentimentChange = now;
        console.log(`Market sentiment changed to: ${this.currentSentiment}`);
      }
    }
  
    getMarketSentiment() {
      return this.currentSentiment;
    }
}

module.exports = MarketSentiment;