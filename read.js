const fs = require('fs');
const path = require('path');

fs.readdir('./lib/scripts', function(err, files) {
  if (err) {
    console.log(err);
  }

  files.forEach(function(fileName) {
    let file = path.join(__dirname, 'lib/scripts', fileName);
    let stats = fs.statSync(file);
    if (stats.isFile() && fileName !== '.DS_Store') {
      fs.readFile(file, 'UTF-8', function(err, contnets) {
        if (err) {
          console.log(err);
        }
        console.log(contnets);
      });
    }
  });
});
