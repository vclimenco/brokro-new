// TODO: add notification + vibration => that should be done in a wrapper
// TODO: add the manifest
// TODO: add OHLC
// TODO: add active time interval - like 6:00 AM / 23:00 PM
// TODO: add the other currencies + DB
// TODO: AI to ddtect the spikes in exc

const getTicker = function (ticker) {
  fetch(`https://api.kraken.com/0/public/Ticker?pair=${ticker}usd`)
      .then(response => response.json())
      .then(data => self.postMessage(data));
};

setTimeout(() => getTicker('kava'), 1000);
//setTimeout(() => getTicker('kava'), 60 * 1000);
//setInterval(() => getTicker('kava'), 60 * 1000);