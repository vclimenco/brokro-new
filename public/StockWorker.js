// self.importScripts('http://127.0.0.1:5500/public/StockRepository.js');
// self.importScripts('http://127.0.0.1:5500/public/StockService.js');

// TODO: add setInterval
// TODO: add notoification + vibration => that should be done in a wrapper
// TODO: add OHLC
console.log(self);
//let stockService = new StockService('kava');

class Stock {
  name = '';
  buyPrice = 0.0;
  sellPrice = 0.0;
}

class StockService {
  #ticker = '';
  url = '';
  constructor(ticker) {
      this.#ticker = ticker;
      this.url = `https://api.kraken.com/0/public/Ticker?pair=${this.#ticker}usd`;
  }

  getTicker() {
    fetch(this.url)
        .then(response => response.json())
        .then(data => console.log(data));
  }
}

//setInterval(stockService.getTicker, 1000);
setTimeout(() => (new StockService('kava')).getTicker(), 10);

self.onmessage = function(e) {
    console.log(e.data);
  
    // Send message to main file
    self.postMessage(workerResult);
}