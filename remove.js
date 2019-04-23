const fs = require('fs');

try {
  fs.unlinkSync('./lib2/project-config.json');
} catch (error) {
  console.log(error);
}

fs.unlinkSync('./notes.md', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('file removed');
  }
});
