const expect = require('chai').expect;
const tools = require('../lib/tools');

describe('tools', () => {
  describe('printName', () => {
    it('should print the last name first', () => {
      let results = tools.printName({ firstName: 'Steve', last: 'Mustanski' });
      expect(results).to.equal('Mustanski, Steve');
    });
  });

  describe('loadWiki', function() {
    this.timeout(5000);

    it("should load Abraham Lincoln's wikipedia page", done => {
      tools.loadWiki({ first: 'Abraham', last: 'Lincoln' }, html => {
        expect(html).to.be.ok;
        done();
      });
    });
  });
});
