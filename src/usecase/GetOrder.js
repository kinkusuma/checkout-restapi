class GetOrder {
  constructor({ orderRepo, orderItemRepo, paymentRepo }) {
    this._orderRepo = orderRepo;
    this._orderItemRepo = orderItemRepo;
    this._paymentRepo = paymentRepo;
  }

  async execute(orderId) {
    const order = await this._orderRepo.get(orderId);
    const orderItems = await this._orderItemRepo.get(orderId);
    order.items = orderItems;
    const payment = await this._paymentRepo.get(orderId);
    order.payment = payment;
    return order;
  }
}

module.exports = GetOrder;
