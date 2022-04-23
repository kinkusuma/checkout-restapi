class Order {
  constructor(payload) {
    this.id = payload.id;
    this.status = payload.status;
    this.buyerName = payload.buyerName;
    this.shippingAddress = payload.shippingAddress;
    this.shipOn = payload.shipOn;
  }
}

module.exports = Order;
