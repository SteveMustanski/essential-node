const fs = require('fs');

fs.renameSync('./lib2/project.config.js', './lib2/project-config.json');

console.log('Config file renamed');

fs.rename('./lib2/notes.md', './notes.md', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('File renamed');
  }
});
