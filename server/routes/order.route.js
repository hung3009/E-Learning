"use strict";
// import express from "express";
// import { authorizeRoles, isAuthenticated } from "../middleware/auth";
// import { createOrder, getAllOrders, newPayment, sendStripePublishableKey } from "../controllers/order.controller";
// import { updateAccessToken } from "../controllers/user.controller";
// const orderRouter = express.Router();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// orderRouter.post("/create-order", isAuthenticated, createOrder);
// orderRouter.get(
//   "/get-orders",
//   updateAccessToken,
//   isAuthenticated,
//   authorizeRoles("admin"),
//   getAllOrders
// );
// orderRouter.get("/payment/stripepublishablekey", sendStripePublishableKey);
// orderRouter.post("/payment",updateAccessToken, isAuthenticated, newPayment);
// export default orderRouter;
//----------------------------------------------------------------
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const order_controller_1 = require("../controllers/order.controller");
const orderRouter = express_1.default.Router();
orderRouter.post("/create-order", auth_1.isAuthenticated, order_controller_1.createOrder);
orderRouter.get("/get-orders", auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), order_controller_1.getAllOrders);
orderRouter.get("/payment/stripepublishablekey", order_controller_1.sendStripePublishableKey);
orderRouter.post("/payment", auth_1.isAuthenticated, order_controller_1.newPayment);
exports.default = orderRouter;
