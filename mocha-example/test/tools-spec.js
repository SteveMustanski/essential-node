const expect = require('chai').expect;
const tools = require('../lib/tools');
const nock = require('nock');

describe('tools', () => {
  describe('printName', () => {
    it('should print the last name first', () => {
      let results = tools.printName({ firstName: 'Steve', last: 'Mustanski' });
      expect(results).to.equal('Mustanski, Steve');
    });
  });

  describe('loadWiki', function() {
    before(function() {
      nock('https://en.wikipedia.org')
        .get('/wiki/Abraham_Lincoln')
        .reply(200, 'Mock Abraham Lincoln Page');
    });

    it("should load Abraham Lincoln's wikipedia page", done => {
      tools.loadWiki({ first: 'Abraham', last: 'Lincoln' }, html => {
        expect(html).to.equal('Mock Abraham Lincoln Page');
        done();
      });
    });
  });
});
