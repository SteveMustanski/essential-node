const EventEmitter = require('events').EventEmitter;
const util = require('util');

const Person = function(name) {
  this.name = name;
};

util.inherits(Person, EventEmitter);

let ben = new Person('Ben Franklin');

ben.on('speak', function(said) {
  console.log(`${this.name}: ${said}`);
});

ben.emit('speak', 'Please do not name anything after me');
