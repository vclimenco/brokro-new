
// TODO: add setInterval
// TODO: add notification + vibration => that should be done in a wrapper
// TODO: add OHLC

const getTicker = function (ticker) {
  const url = `https://api.kraken.com/0/public/Ticker?pair=${ticker}usd`;
  // fetch(this.url)
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  let workerResult = 'hi from worker';
  self.postMessage(workerResult);
};

setTimeout(() => getTicker('kava'), 1000);
//setTimeout(() => getTicker('kava'), 60 * 1000);
//setInterval(() => getTicker('kava'), 60 * 1000);

self.onmessage = function(e) {
    console.log(e.data);
  
    // Send message to main file
    self.postMessage(workerResult);
}