class OrderItem {
  constructor(payload) {
    this.name = payload.name;
    this.price = payload.price;
    this.quantity = payload.quantity;
  }
}

module.exports = OrderItem;
