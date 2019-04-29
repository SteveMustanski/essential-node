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
    // mock warehouse and return fake tracking number
    this.warehouse = {
      packageAndShip: sinon.stub().yields(1098765432),
    };
    // set up mock
    order.__set__('warehouse', this.warehouse);
    // set the order console to point to sinon spy using rewire
    // order.__set__('console', this.console);
  });
  it('order an item when there are enough in stock', function(done) {
    let _this = this;
    order.orderItem('CCC', 3, () => {
      done();
    });
  });

  describe('warehouse interaction', function() {
    beforeEach(function() {
      this.callback = sinon.spy();
      order.orderItem('CCC', 2, this.callback);
    });

    it('returns a tracking numbrer', function() {
      expect(this.callback.calledWith(1098765432)).to.equal(true);
    });

    it('calls packageAndShip with the correct sku and quanity', function() {
      expect(this.warehouse.packageAndShip.calledWith('CCC', 2)).to.equal(true);
    });
  });
});
