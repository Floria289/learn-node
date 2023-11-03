const fs = require('fs');

function someAsyncOperation(callback) {
  fs.readFile('./data/test.txt', callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 0);

someAsyncOperation(() => {
  const startCallback = Date.now();
  console.log('someAsyncOperation');
  // do something that will take 10ms...
  while (Date.now() - startCallback < 150) {
    // do nothing
  }
});

// if timer is 0, then timer ends first, then it's timer-poll-callback. but it should be poll-callback-timer.
// if 19 becomes 150, still poll-callback-timer, even timer seems finished "first". but file read already finished, so it still first than timer.
// 所以要看文件读多久，即poll花多久。 如果poll本身结束的比timer早，就callback先。如果poll还没结束，timer时间已经到了，就后面再callback