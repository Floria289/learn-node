const bar = (x) => console.log(`${x} : bar`);
const baz = () => console.log('baz');

const foo = (a) => {
  console.log('foo');
  setTimeout(function() { // this function is a callback, in the timer face,
    bar(a);               // waiting for we done, event loop will take timer face (no matter 0 or 999)
  }, 0);
  baz();
}

foo(2);
foo(1);
