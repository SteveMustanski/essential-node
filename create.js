const fs = require('fs');

let md = `
Sample Markdown Title
+++++++++++++++++++++

Sample subtitle
---------------------

- point 1
- point 2
- point 3
`;

fs.writeFile('sample.md', md.trim(), function(err) {
  console.log('File created');
});
