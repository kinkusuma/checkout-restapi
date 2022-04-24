const { nanoid } = require("nanoid");
const express = require("express");

const Server = require("./infrastructure/server");
const pg = require("./infrastructure/database/pg");
const OrderItemRepository = require("./infrastructure/database/OrderItemRepository");
const OrdersRepository = require("./infrastructure/database/OrdersRepository");
const PaymentRequestRepository = require("./infrastructure/database/PaymentRequestRepository");
const CreateOrder = require("./usecase/CreateOrder");
const GetOrder = require("./usecase/GetOrder");
const CapturePayment = require("./usecase/CapturePayment");
const CancelOrder = require("./usecase/CancelOrder");
const CompleteOrder = require("./usecase/CompleteOrder");
const OrderInterface = require("./interface/OrderInterface");
const PaymentInterface = require("./interface/PaymentInterface");

const orderRepo = new OrdersRepository(pg, nanoid);
const orderItemRepo = new OrderItemRepository(pg, nanoid);
const paymentRepo = new PaymentRequestRepository(pg, nanoid);

const cancelOrder = new CancelOrder({ orderRepo });
const createOrder = new CreateOrder({ orderRepo, orderItemRepo, paymentRepo });
const getOrder = new GetOrder({ orderRepo, orderItemRepo, paymentRepo });
const completeOrder = new CompleteOrder({ orderRepo });
const capturePayment = new CapturePayment({ orderRepo, paymentRepo });

const orderInterface = new OrderInterface({
  express,
  createOrder,
  getOrder,
  completeOrder,
  cancelOrder,
});
const paymentInterface = new PaymentInterface({ express, capturePayment });

const server = express();
server.use(express.json());
server.use("/order", orderInterface.handle());
server.use("/payment", paymentInterface.handle());
server.listen(3000);
