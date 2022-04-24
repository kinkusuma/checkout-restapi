const OrderItem = require("../entities/order-item/OrderItem");
const NewOrder = require("../entities/order/NewOrder");
const NewPaymentRequest = require("../entities/payment-request/NewPaymentRequest");

class CreateOrder {
  constructor({ orderRepo, orderItemRepo, paymentRepo }) {
    this._orderRepo = orderRepo;
    this._orderItemRepo = orderItemRepo;
    this._paymentRepo = paymentRepo;
  }

  async execute(payload) {
    const order = new NewOrder({ ...payload });
    const orderItems = payload.items;
    const paymentMethod = payload.paymentMethod;
    const orderId = await this._orderRepo.create(order);
    orderItems.map(async (item) => {
      const orderItem = new OrderItem({ ...item });
      await this._orderItemRepo.addItem(orderItem, orderId);
    });
    const totalPrice = await this._orderItemRepo.calculate(orderId);
    await this._paymentRepo.create(
      new NewPaymentRequest({ orderId, paymentMethod, price: totalPrice })
    );
    return orderId;
  }
}

module.exports = CreateOrder;
