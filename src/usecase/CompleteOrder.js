class CompleteOrder {
  constructor({ orderRepo }) {
    this._orderRepo = orderRepo;
  }

  async execute(orderId) {
    await this._orderRepo.get(orderId);
    await this._orderRepo.complete(orderId);
  }
}

module.exports = CompleteOrder;
