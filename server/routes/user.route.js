"use strict";
// import express from "express";
// import {
//   activateUser,
//   loginUser,
//   registrationUser,
//   logoutUser,
//   updateAccessToken,
//   getUserInfo,
//   socialAuth,
//   updateUserInfo,
//   updatePassword,
//   updateProfilePicture,
//   getAllUsers,
//   updateUserRole,
//   deleteUser,
// } from "../controllers/user.controller";
// import { authorizeRoles, isAuthenticated } from "../middleware/auth";
// const userRouter = express.Router();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// userRouter.post("/registration", registrationUser);
// userRouter.post("/activate-user", activateUser);
// userRouter.post("/login", loginUser);
// userRouter.get("/logout", isAuthenticated, logoutUser);
// userRouter.get("/refresh", updateAccessToken);
// userRouter.get("/me", updateAccessToken ,isAuthenticated, getUserInfo);
// userRouter.post("/social-auth", socialAuth);
// userRouter.put("/update-user-info", updateAccessToken ,isAuthenticated, updateUserInfo);
// userRouter.put("/update-user-password", updateAccessToken ,isAuthenticated, updatePassword);
// userRouter.put("/update-user-avatar", updateAccessToken ,isAuthenticated, updateProfilePicture);
// userRouter.get(
//   "/get-users",
//   updateAccessToken,
//   isAuthenticated,
//   authorizeRoles("admin"),
//   getAllUsers
// );
// userRouter.put(
//   "/update-user",
//   updateAccessToken,
//   isAuthenticated,
//   authorizeRoles("admin"),
//   updateUserRole
// );
// userRouter.delete(
//   "/delete-user/:id",
//   updateAccessToken,
//   isAuthenticated,
//   authorizeRoles("admin"),
//   deleteUser
// );
// export default userRouter;
//----------------------------------------------------------------
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const auth_1 = require("../middleware/auth");
const userRouter = express_1.default.Router();
userRouter.post("/registration", user_controller_1.registrationUser);
userRouter.post("/activate-user", user_controller_1.activateUser);
userRouter.post("/login", user_controller_1.loginUser);
userRouter.get("/logout", auth_1.isAuthenticated, user_controller_1.logoutUser);
userRouter.get("/me", auth_1.isAuthenticated, user_controller_1.getUserInfo);
userRouter.post("/social-auth", user_controller_1.socialAuth);
userRouter.put("/update-user-info", auth_1.isAuthenticated, user_controller_1.updateUserInfo);
userRouter.put("/update-user-password", auth_1.isAuthenticated, user_controller_1.updatePassword);
userRouter.put("/update-user-avatar", auth_1.isAuthenticated, user_controller_1.updateProfilePicture);
userRouter.get("/get-users", auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), user_controller_1.getAllUsers);
userRouter.put("/update-user", auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), user_controller_1.updateUserRole);
userRouter.delete("/delete-user/:id", auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), user_controller_1.deleteUser);
userRouter.get("/refresh", user_controller_1.updateAccessToken);
exports.default = userRouter;
