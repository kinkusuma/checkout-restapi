class CancelOrder {
  constructor({ orderRepo }) {
    this._orderRepo = orderRepo;
  }

  async execute(orderId) {
    await this._orderRepo.get(orderId);
    await this._orderRepo.cancel(orderId);
  }
}

module.exports = CancelOrder;
