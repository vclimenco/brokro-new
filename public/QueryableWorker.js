// https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers
/*
MOTO G4
  Type	IPS LCD
  Size	5.5 inches, 83.4 cm2 (~71.2% screen-to-body ratio)
  Resolution	1080 x 1920 pixels, 16:9 ratio (~401 ppi density)
  Protection	Corning Gorilla Glass 3
*/


var queryableFunctions = {
    // example #1: get the difference between two numbers:
    getDifference: function(nMinuend, nSubtrahend) {
        reply('printStuff', nMinuend - nSubtrahend);
    },
    // example #2: wait three seconds
    waitSomeTime: function() {
        setTimeout(function() { reply('doAlert', 3, 'seconds'); }, 3000);
    }
  };
  
  // system functions
  
  function defaultReply(message) {
    // your default PUBLIC function executed only when main page calls the queryableWorker.postMessage() method directly
    // do something
  }
  
  function reply() {
    if (arguments.length < 1) { throw new TypeError('reply - not enough arguments'); return; }
    postMessage({ 'queryMethodListener': arguments[0], 'queryMethodArguments': Array.prototype.slice.call(arguments, 1) });
  }
  
  onmessage = function(oEvent) {
    if (oEvent.data instanceof Object && oEvent.data.hasOwnProperty('queryMethod') && oEvent.data.hasOwnProperty('queryMethodArguments')) {
      queryableFunctions[oEvent.data.queryMethod].apply(self, oEvent.data.queryMethodArguments);
    } else {
      defaultReply(oEvent.data);
    }
  };