class NewPaymentRequest {
  constructor(payload) {
    this.orderId = payload.orderId;
    this.paymentMethod = payload.paymentMethod;
    this.price = payload.price;
  }
}

module.exports = NewPaymentRequest;
