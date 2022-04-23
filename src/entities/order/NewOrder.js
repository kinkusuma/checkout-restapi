class NewOrder {
  constructor(payload) {
    this.buyerName = payload.buyerName;
    this.shippingAddress = payload.shippingAddress;
    this.shipOn = payload.shipOn;
  }
}

module.exports = NewOrder;
