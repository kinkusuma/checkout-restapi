class PaymentRequest {
  constructor(payload) {
    this.id = payload.id;
    this.status = payload.status;
    this.orderId = payload.orderId;
    this.paymentMethod = payload.paymentMethod;
    this.price = payload.price;
  }
}

module.exports = PaymentRequest;
