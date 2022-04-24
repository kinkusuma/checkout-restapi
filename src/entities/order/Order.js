class Order {
  constructor(payload) {
    this.id = payload.id;
    this.status = payload.status;
    this.buyerName = payload.buyer_name;
    this.shippingAddress = payload.shipping_address;
  }
}

module.exports = Order;
