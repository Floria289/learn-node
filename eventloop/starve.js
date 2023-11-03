
const cb = () => {
    // do Something
    process.nextTick(cb);
};

setTimeout(() => console.log('setTimeout executed'), 5);

setImmediate(() => cb); // if it's process.nextTick() then after the poll - log(start), it just keep calling 

console.log('Start');
