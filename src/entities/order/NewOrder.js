class NewOrder {
  constructor(payload) {
    this.buyerName = payload.buyerName;
    this.shippingAddress = payload.shippingAddress;
  }
}

module.exports = NewOrder;
