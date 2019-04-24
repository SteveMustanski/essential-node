const fs = require('fs');

let stream = fs.createReadStream('./chat.log', 'UTF-8');

let data = '';

// this will fire once if a data event happens
stream.once('data', () => {
  console.log('\n\n');
  console.log('Reading started...');
  console.log('\n\n');
});

stream.on('data', chunk => {
  process.stdout.write(`chunk: ${chunk.length} |`);

  data += chunk;
});

// check for end of stream and display results
stream.on('end', () => {
  console.log('\n\n');
  console.log(`Read completed. Size: ${data.length}`);
  console.log('\n\n');
});
