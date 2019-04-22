const waitTime = 3000;
let currentTime = 0;
const waitInterval = 100;
let percentWaited = 0;

function writeWaitingPercent(percent) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting... ${percent}%`);
}

let interval = setInterval(function() {
  currentTime += waitInterval;
  percentWaited = Math.floor((currentTime / waitTime) * 100);
  writeWaitingPercent(percentWaited);
}, waitInterval);

setTimeout(function() {
  clearInterval(interval);
  writeWaitingPercent(100);
  console.log('\n Done');
}, waitTime);

process.stdout.write('\n\n');
writeWaitingPercent(percentWaited);
