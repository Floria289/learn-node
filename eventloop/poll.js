const fs = require('fs');

function someAsyncOperation() {
  fs.readFile('/path/to/file', function(err, data) {
    if (err) console.log('Read Error');
    else console.log('Data: ' + data);
  });
}

function foo() {
  console.log('foo');
}

someAsyncOperation(); //3 because the function is in the callback queue. when foo finish which means the poll operations finish, it will callback.
foo(); //1
console.log('done'); //2
