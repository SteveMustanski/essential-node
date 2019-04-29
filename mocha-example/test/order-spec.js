const expect = require('chai').expect;
const rewire = require('rewire');
const order = rewire('../lib/order'); // require with rewire so we can inject test data later

describe('Ordering Items', () => {
  beforeEach(function() {
    this.testData = [
      { sku: 'AAA', qty: 10 },
      { sku: 'BBB', qty: 0 },
      { sku: 'CCC', qty: 3 },
    ];
    // using rewire to use test inventoryData rather than real data
    order.__set__('inventoryData', this.testData);
  });
  it('order an item when there are enough in stock', done => {
    order.orderItem('CCC', 3, () => {
      done();
    });
  });
});
