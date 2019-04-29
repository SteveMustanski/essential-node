const expect = require('chai').expect;
const rewire = require('rewire');
const sinon = require('sinon');
const order = rewire('../lib/order'); // require with rewire so we can inject test data later

describe('Ordering Items', function() {
  beforeEach(function() {
    this.testData = [
      { sku: 'AAA', qty: 10 },
      { sku: 'BBB', qty: 0 },
      { sku: 'CCC', qty: 3 },
    ];
    // using rewire to use test inventoryData rather than real data
    order.__set__('inventoryData', this.testData);
    // set up sinon spy
    this.console = {
      log: sinon.spy(),
    };
    // set the order console to point to sinon spy using rewire
    // order.__set__('console', this.console);
  });
  it('order an item when there are enough in stock', function(done) {
    let _this = this;
    order.orderItem('CCC', 3, () => {
      done();
    });
  });
});
