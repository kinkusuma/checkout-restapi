class PaymentInterface {
  constructor({ express, capturePayment }) {
    this.router = express.Router();
    this._capturePayment = capturePayment;
  }

  handle() {
    this.router.post("/complete", async (req, res) => {
      await this._capturePayment.execute(req.body.id);
      res.send({ msg: "success" });
    });
    return this.router;
  }
}

module.exports = PaymentInterface;
