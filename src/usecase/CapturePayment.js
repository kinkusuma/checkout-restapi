class CapturePayment {
  constructor({ orderRepo, paymentRepo }) {
    this._orderRepo = orderRepo;
    this._paymentRepo = paymentRepo;
  }

  async execute(orderId) {
    const payment = await this._paymentRepo.get(orderId);
    await this._paymentRepo.capture(payment.id);
    await this._orderRepo.requestShipment(orderId);
  }
}

module.exports = CapturePayment;
