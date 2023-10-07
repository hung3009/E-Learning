"use strict";
// import express from "express";
// import { authorizeRoles, isAuthenticated } from "../middleware/auth";
// import {
//   getNotifications,
//   updateNotification,
// } from "../controllers/notification.controller";
// import { updateAccessToken } from "../controllers/user.controller";
// const notificationRoute = express.Router();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// notificationRoute.get(
//   "/get-all-notifications",
//   updateAccessToken,
//   isAuthenticated,
//   authorizeRoles("admin"),
//   getNotifications
// );
// notificationRoute.put(
//   "/update-notification/:id",
//   updateAccessToken,
//   isAuthenticated,
//   authorizeRoles("admin"),
//   updateNotification
// );
// export default notificationRoute;
//----------------------------------------------------------------
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const notification_controller_1 = require("../controllers/notification.controller");
const notificationRoute = express_1.default.Router();
notificationRoute.get("/get-all-notifications", auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), notification_controller_1.getNotifications);
notificationRoute.put("/update-notification/:id", auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), notification_controller_1.updateNotification);
exports.default = notificationRoute;
