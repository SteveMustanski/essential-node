const expect = require('chai').expect;
const tools = require('../lib/tools');

describe('printName', () => {
  it('should print the last name first', () => {
    let results = tools.printName({ firstName: 'Steve', last: 'Mustanski' });
    expect(results).to.equal('Mustanski, Steve');
  });
});
