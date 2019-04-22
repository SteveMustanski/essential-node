const Person = require('./lib/Person');

let ben = new Person('Ben Franklin');
let george = new Person('George Washington');

ben.on('speak', function(said) {
  console.log(`${this.name}: ${said}`);
});
ben.emit('speak', 'Please do not name anything after me');

george.on('speak', function(said) {
  console.log(`${this.name}: ${said}`);
});
george.emit('speak', 'Best president evah!');
