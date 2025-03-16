const express = require("express");
const router = express.Router();
const { createCourse } = require("../controllers/createCourse");
const { getCourseById, getCourses, getSubCourseById } = require("../controllers/getCourse");
//const { updateProgress } = require("../controllers/updateProgress");
//const { updateTimeSpent } = require("../controllers/updateTimeSpent");
const { updateProgress } = require("../controllers/updateProgress");
// const userController = require("../controllers/user1");
// const authMiddleware = require("../middleware/auth");
// ✅ Create a new course
router.post("/createCourse", createCourse);

// ✅ Get all courses
router.get("/getCourses", getCourses);

// router.post("/register", userController.register);
// router.post("/login", userController.login);

// Protected route example
// router.get("/profile", authMiddleware.authenticate, (req, res) => {
//   res.json({ message: "Welcome to your profile" });
// });
router.post("/updateProgress/:courseId/:subCourseId", updateProgress);
// ✅ Get a single course by ID
router.get("/getCourses/:id", getCourseById);

// ✅ Get a specific sub-course by ID
router.get("/getCourses/:courseId/subcourses/:subCourseId", getSubCourseById);

router.get("/User"), 

module.exports = router;
