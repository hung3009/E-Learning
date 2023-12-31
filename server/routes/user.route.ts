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


import express from "express";
import {
  activateUser,
  deleteUser,
  getAllUsers,
  getUserInfo,
  loginUser,
  logoutUser,
  registrationUser,
  socialAuth,
  updatePassword,
  updateProfilePicture,
  updateUserInfo,
  updateUserRole,
  updateAccessToken,
} from "../controllers/user.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
const userRouter = express.Router();

userRouter.post("/registration", registrationUser);

userRouter.post("/activate-user", activateUser);

userRouter.post("/login", loginUser);

userRouter.get("/logout",isAuthenticated, logoutUser);

userRouter.get("/me", isAuthenticated, getUserInfo);

userRouter.post("/social-auth", socialAuth);

userRouter.put("/update-user-info",isAuthenticated, updateUserInfo);

userRouter.put("/update-user-password", isAuthenticated, updatePassword);

userRouter.put("/update-user-avatar", isAuthenticated, updateProfilePicture);

userRouter.get(
  "/get-users",
  isAuthenticated,
  authorizeRoles("admin"),
  getAllUsers
);

userRouter.put(
  "/update-user",
  isAuthenticated,
  authorizeRoles("admin"),
  updateUserRole
);

userRouter.delete(
  "/delete-user/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  deleteUser
);

userRouter.get("/refresh", updateAccessToken);

export default userRouter;
