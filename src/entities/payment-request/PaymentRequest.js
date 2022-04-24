class PaymentRequest {
  constructor(payload) {
    this.id = payload.id;
    this.status = payload.status;
    this.orderId = payload.order_id;
    this.paymentMethod = payload.payment_method;
    this.price = payload.price;
  }
}

module.exports = PaymentRequest;
