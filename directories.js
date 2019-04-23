const fs = require('fs');

fs.renameSync('./assets/logs', './logs');

console.log('logs moved');

fs.rmdir('./assets', function(err) {
  if (err) {
    throw err;
  }

  console.log('assets directory removed.');
});
