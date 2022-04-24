class OrderInterface {
  constructor({ express, createOrder, getOrder, completeOrder, cancelOrder }) {
    this.router = express.Router();
    this._createOrder = createOrder;
    this._getOrder = getOrder;
    this._completeOrder = completeOrder;
    this._cancelOrder = cancelOrder;
  }

  handle() {
    this.router.post("/new", async (req, res) => {
      const orderId = await this._createOrder.execute(req.body);
      res.send({ id: orderId });
    });
    this.router.get("/:id", async (req, res) => {
      const order = await this._getOrder.execute(req.params.id);
      res.send(order);
    });
    this.router.post("/cancel", async (req, res) => {
      await this._cancelOrder.execute(req.body.id);
      res.send({ msg: "success" });
    });
    this.router.post("/complete", async (req, res) => {
      await this._completeOrder.execute(req.body.id);
      res.send({ msg: "success" });
    });
    return this.router;
  }
}

module.exports = OrderInterface;
