const path = require('path');
const util = require('util');
const v8 = require('v8');

// using path in console.log
console.log(path.basename(__filename));
let dirUploads = path.join(__dirname, 'www', 'files', 'uploads');
console.log(dirUploads);

// using util
util.log(path.basename(__filename));
util.log(dirUploads);

// v8
util.log(v8.getHeapStatistics());
