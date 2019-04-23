const fs = require('fs');

let files = fs.readdir('./lib', function(err, files) {
  if (err) {
    throw err;
  }

  console.log(files);
});

console.log('Reading...'); // happens first because of async
