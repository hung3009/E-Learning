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


import express from "express";
import {
  addAnwser,
  addQuestion,
  addReplyToReview,
  addReview,
  deleteCourse,
  editCourse,
  generateVideoUrl,
  getAdminAllCourses,
  getAllCourses,
  getCourseByUser,
  getSingleCourse,
  uploadCourse,
} from "../controllers/course.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
const courseRouter = express.Router();

courseRouter.post(
  "/create-course",
  isAuthenticated,
  authorizeRoles("admin"),
  uploadCourse
);

courseRouter.put(
  "/edit-course/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  editCourse
);

courseRouter.get("/get-course/:id", getSingleCourse);

courseRouter.get("/get-courses", getAllCourses);

courseRouter.get(
  "/get-admin-courses",
  isAuthenticated,
  authorizeRoles("admin"),
  getAdminAllCourses
);

courseRouter.get("/get-course-content/:id", isAuthenticated, getCourseByUser);

courseRouter.put("/add-question", isAuthenticated, addQuestion);

courseRouter.put("/add-answer", isAuthenticated, addAnwser);

courseRouter.put("/add-review/:id", isAuthenticated, addReview);

courseRouter.put(
  "/add-reply",
  isAuthenticated,
  authorizeRoles("admin"),
  addReplyToReview
);

courseRouter.post("/getVdoCipherOTP", generateVideoUrl);

courseRouter.delete(
  "/delete-course/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  deleteCourse
);

export default courseRouter;




