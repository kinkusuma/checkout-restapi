const OrderItem = require("../../entities/order-item/OrderItem");

class OrderItemRepository {
  constructor(pool, idGenerator) {
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addItem({ name, price, quantity }, orderId) {
    const id = this._idGenerator();
    const totalPrice = price * quantity;
    const query = {
      text: "INSERT INTO order_item VALUES ($1, $2, $3, $4, $5, $6) RETURNING id",
      values: [id, name, price, quantity, totalPrice, orderId],
    };
    const result = await this._pool.query(query);
    return result.rows[0].id;
  }

  async calculate(orderId) {
    const query = {
      text: "SELECT SUM(total_price) AS total FROM order_item WHERE order_id = $1",
      values: [orderId],
    };
    const result = await this._pool.query(query);
    return result.rows[0].total;
  }

  async get(orderId) {
    const query = {
      text: "SELECT * FROM order_item WHERE order_id = $1",
      values: [orderId],
    };
    const result = await this._pool.query(query);
    return result.rows.map((row) => OrderItem({ ...row }));
  }
}

module.exports = OrderItemRepository;
