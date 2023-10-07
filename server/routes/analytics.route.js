"use strict";
// import express from "express";
// import { authorizeRoles, isAuthenticated } from "../middleware/auth";
// import { getCoursesAnalytics, getOrderAnalytics, getUsersAnalytics } from "../controllers/analytics.controller";
// import { updateAccessToken } from "../controllers/user.controller";
// const analyticsRouter = express.Router();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// analyticsRouter.get("/get-users-analytics", updateAccessToken ,isAuthenticated,authorizeRoles("admin"), getUsersAnalytics);
// analyticsRouter.get("/get-orders-analytics", updateAccessToken,isAuthenticated,authorizeRoles("admin"), getOrderAnalytics);
// analyticsRouter.get("/get-courses-analytics",updateAccessToken ,isAuthenticated,authorizeRoles("admin"), getCoursesAnalytics);
// export default analyticsRouter;
//----------------------------------------------------------------
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const analytics_controller_1 = require("../controllers/analytics.controller");
const analyticsRouter = express_1.default.Router();
analyticsRouter.get("/get-users-analytics", auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), analytics_controller_1.getUsersAnalytics);
analyticsRouter.get("/get-orders-analytics", auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), analytics_controller_1.getOrderAnalytics);
analyticsRouter.get("/get-courses-analytics", auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), analytics_controller_1.getCoursesAnalytics);
exports.default = analyticsRouter;
