/* main.js */

// Create worker
const myWorker = new Worker('worker.js');

// Send message to worker
myWorker.postMessage('Hello!');

// Receive message from worker
myWorker.onmessage = function(e) {
  console.log(e.data);
}

/* worker.js */

// Receive message from main file
self.onmessage = function(e) {
    console.log(e.data);
  
    // Send message to main file
    self.postMessage(workerResult);
}