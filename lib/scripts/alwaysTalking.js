const sayings = [
  'This is some sort of quote',
  'And here is another quote',
  'Just one more quote',
  'And something else',
];

const interval = setInterval(function() {
  let i = Math.floor(Math.random() * sayings.length);
  process.stdout.write(`${sayings[i]} \n`);
}, 1000);

process.stdin.on('data', function(data) {
  console.log(`STDIN Data received: ${data.toString().trim()}`);
  clearInterval(interval);
  process.exit();
});
