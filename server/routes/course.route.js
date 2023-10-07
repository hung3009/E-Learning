"use strict";
// import express from "express";
// import {
//   addAnwser,
//   addQuestion,
//   addReplyToReview,
//   addReview,
//   deleteCourse,
//   editCourse,
//   generateVideoUrl,
//   getAdminAllCourses,
//   getAllCourses,
//   getCourseByUser,
//   getSingleCourse,
//   uploadCourse,
// } from "../controllers/course.controller";
// import { authorizeRoles, isAuthenticated } from "../middleware/auth";
// import { updateAccessToken } from "../controllers/user.controller";
// const courseRouter = express.Router();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// courseRouter.post(
//   "/create-course",
//   updateAccessToken,
//   isAuthenticated,
//   authorizeRoles("admin"),
//   uploadCourse
// );
// courseRouter.put(
//   "/edit-course/:id",
//   updateAccessToken,
//   isAuthenticated,
//   authorizeRoles("admin"),
//   editCourse
// );
// courseRouter.get("/get-course/:id", getSingleCourse);
// courseRouter.get("/get-courses", getAllCourses);
// courseRouter.get(
//   "/get-admin-courses",
//   updateAccessToken,
//   isAuthenticated,
//   authorizeRoles("admin"),
//   getAdminAllCourses
// );
// courseRouter.get("/get-course-content/:id", updateAccessToken,isAuthenticated, getCourseByUser);
// courseRouter.put("/add-question", updateAccessToken,isAuthenticated, addQuestion);
// courseRouter.put("/add-answer", updateAccessToken,isAuthenticated, addAnwser);
// courseRouter.put("/add-review/:id", updateAccessToken,isAuthenticated, addReview);
// courseRouter.put(
//   "/add-reply",
//   updateAccessToken,
//   isAuthenticated,
//   authorizeRoles("admin"),
//   addReplyToReview
// );
// courseRouter.post("/getVdoCipherOTP", generateVideoUrl);
// courseRouter.delete(
//   "/delete-course/:id",
//   updateAccessToken,
//   isAuthenticated,
//   authorizeRoles("admin"),
//   deleteCourse
// );
// export default courseRouter;
//----------------------------------------------------------------
const express_1 = __importDefault(require("express"));
const course_controller_1 = require("../controllers/course.controller");
const auth_1 = require("../middleware/auth");
const courseRouter = express_1.default.Router();
courseRouter.post("/create-course", auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), course_controller_1.uploadCourse);
courseRouter.put("/edit-course/:id", auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), course_controller_1.editCourse);
courseRouter.get("/get-course/:id", course_controller_1.getSingleCourse);
courseRouter.get("/get-courses", course_controller_1.getAllCourses);
courseRouter.get("/get-admin-courses", auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), course_controller_1.getAdminAllCourses);
courseRouter.get("/get-course-content/:id", auth_1.isAuthenticated, course_controller_1.getCourseByUser);
courseRouter.put("/add-question", auth_1.isAuthenticated, course_controller_1.addQuestion);
courseRouter.put("/add-answer", auth_1.isAuthenticated, course_controller_1.addAnwser);
courseRouter.put("/add-review/:id", auth_1.isAuthenticated, course_controller_1.addReview);
courseRouter.put("/add-reply", auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), course_controller_1.addReplyToReview);
courseRouter.post("/getVdoCipherOTP", course_controller_1.generateVideoUrl);
courseRouter.delete("/delete-course/:id", auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), course_controller_1.deleteCourse);
exports.default = courseRouter;
