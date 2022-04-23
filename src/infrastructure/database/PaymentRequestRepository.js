const PaymentRequest = require("../../entities/payment-request/PaymentRequest");

class PaymentRequestRepository {
  constructor(pool, idGenerator) {
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async create({ orderId, paymentMethod, price }) {
    const id = this._idGenerator();
    const status = "ON REQUEST";
    const query = {
      text: "INSERT INTO payment_request VALUES ($1, $2, $3, $4, $5) RETURNING id",
      values: [id, status, orderId, paymentMethod, price],
    };
    const result = await this._pool.query(query);
    return result.rows[0].id;
  }

  async capture(paymentId) {
    const status = "CAPTURED";
    const query = {
      text: "UPDATE payment_request SET status = $1 WHERE id = $2",
      values: [status, paymentId],
    };
    await this._pool.query(query);
  }

  async cancel(paymentId) {
    const status = "CANCELED";
    const query = {
      text: "UPDATE payment_request SET status = $1 WHERE id = $2",
      values: [status, paymentId],
    };
    await this._pool.query(query);
  }

  async get(orderId) {
    const query = {
      text: "SELECT * FROM payment_request WHERE order_id = $1",
      values: [orderId],
    };
    const result = await this._pool.query(query);
    if (!result.rowCount) {
      throw "Error: payment not found";
    }
    return result.rows.map((row) => new PaymentRequest({ ...row }));
  }
}

module.exports = PaymentRequestRepository;
