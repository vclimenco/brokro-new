// TODO: add notification + vibration => that should be done in a wrapper
// TODO: add the manifest
// TODO: add OHLC
// TODO: add active time interval - like 6:00 AM / 23:00 PM
// TODO: add the other currencies + DB
// TODO: AI to ddtect the spikes in exc
// TODO: add the check for the latency on the site

const kavaBuyPrice = 3.0;
const kavaSellPrice = 4.4;

const getTicker = function (crypto) {
  fetch('/public/sample.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .then(() => clearInterval(interval));
  // let ticker = `${crypto}USD`;
  // fetch(`https://api.kraken.com/0/public/Ticker?pair=${ticker.toLowerCase()}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       var cryptoPrice = parseFloat(data.result[ticker].c[0]);
  //       if (cryptoPrice <= kavaBuyPrice) {
  //         self.postMessage(`Buy ${crypto}: ${cryptoPrice}`);
  //       } else if (kavaSellPrice <= cryptoPrice) {
  //         self.postMessage(`Sell ${crypto}: ${cryptoPrice}`);
  //       } else {
  //         self.postMessage('Stay on alert!');
  //       }
 
  //     });
};

let interval = setInterval(() => getTicker('KAVA'), 1000);
//setTimeout(() => getTicker('KAVA'), 60 * 1000);
//setInterval(() => getTicker('KAVA'), 60 * 1000);