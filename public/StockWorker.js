// TODO: add notification + vibration => that should be done in a wrapper
// TODO: add the manifest
// TODO: add OHLC
// TODO: add the other currencies + DB
// TODO: Bot to ddtect the spikes in exc
// TODO: add the check for the latency on the site

const kavaBuyPrice = 3.0;
const kavaSellPrice = 4.0;

const kava_token = 'KAVA';

const getTicker = function (crypto) {
  // fetch('/public/sample.json')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .then(() => clearInterval(interval));
  let ticker = `${crypto}USD`;
  fetch(`https://api.kraken.com/0/public/Ticker?pair=${ticker.toLowerCase()}`)
      .then(response => response.json())
      .then(data => {
        let cryptoPrice = parseFloat(data.result[ticker].c[0]);
        console.log(cryptoPrice);
        if (cryptoPrice <= kavaBuyPrice) {
          self.postMessage(`Buy ${crypto}: ${cryptoPrice}`);
        } else if (kavaSellPrice <= cryptoPrice) {
          self.postMessage(`Sell ${crypto}: ${cryptoPrice}`);
        } else {
          self.postMessage('Stay on alert!');
        }
 
      })
      .then(() => clearInterval(interval));
      // TODO: get rid of clearInterval
};

console.log(new Date(Date.now()));

console.log(getTicker(kava_token));
let interval = setInterval(getTicker, 60 * 1000, kava_token);
//setTimeout(() => getTicker('KAVA'), 60 * 1000);
//setInterval(() => getTicker('KAVA'), 60 * 1000);