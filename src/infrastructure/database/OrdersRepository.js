const Order = require("../../entities/order/Order");

class OrdersRepository {
  constructor(pool, idGenerator) {
    this._idGenerator = idGenerator;
    this._pool = pool;
  }

  async create({ buyerName, shippingAddress, shipOn }) {
    const id = this._idGenerator();
    const status = "ON REQUEST";
    const query = {
      text: "INSERT INTO orders VALUES ($1,$2,$3,$4,$5) RETURNING id",
      values: [id, status, buyerName, shippingAddress, shipOn],
    };
    const result = await this._pool.query(query);
    return result.rows[0].id;
  }

  async get(orderId) {
    const query = {
      text: "SELECT * FROM orders where orders.id = $1",
      values: [orderId],
    };
    const result = await this._pool.query(query);
    if (!result.rowCount) {
      throw "Error: order not found";
    }
    return new Order({ ...result.rows[0] });
  }

  async cancel(orderId) {
    const status = "CANCELED";
    const query = {
      text: "UPDATE orders SET status = $1 WHERE id = $2",
      values: [status, orderId],
    };
    await this._pool.query(query);
  }
}

module.exports = OrdersRepository;
