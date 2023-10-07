"use strict";
// import express from "express";
// import { authorizeRoles, isAuthenticated } from "../middleware/auth";
// import { createLayout, editLayout, getLayoutByType } from "../controllers/layout.controller";
// import { updateAccessToken } from "../controllers/user.controller";
// const layoutRouter = express.Router();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// layoutRouter.post("/create-layout", updateAccessToken ,isAuthenticated,authorizeRoles("admin"), createLayout);
// layoutRouter.put("/edit-layout", updateAccessToken ,isAuthenticated,authorizeRoles("admin"), editLayout);
// layoutRouter.get("/get-layout/:type",getLayoutByType);
// export default layoutRouter;
//----------------------------------------------------------------
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const layout_controller_1 = require("../controllers/layout.controller");
const layoutRouter = express_1.default.Router();
layoutRouter.post("/create-layout", auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), layout_controller_1.createLayout);
layoutRouter.put("/edit-layout", auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), layout_controller_1.editLayout);
layoutRouter.get("/get-layout/:type", layout_controller_1.getLayoutByType);
exports.default = layoutRouter;
