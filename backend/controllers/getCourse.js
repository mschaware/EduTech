const mongoose = require("mongoose");
const Course = require("../models/course");

// ✅ Get all courses
const getCourses = (req, res) => {
  Course.find()
    .then((courses) => {
      res.json(courses);
    })
    .catch((error) => {
      console.error("Error fetching courses:", error);
      res.status(500).json({ message: "Error fetching courses" });
    });
};

// ✅ Get a course by ID
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
  } catch (error) {
    console.error("Error fetching course by ID:", error);
    res.status(500).json({ message: "Error fetching course" });
  }
};

//✅ //Get a specific sub-course by ID
const getSubCourseById = async (req, res) => {
  try {
    const { courseId, subCourseId } = req.params;
    console.log(`🔍 Fetching SubCourse | CourseID=${courseId} | SubCourseID=${subCourseId}`);

    // ✅ Convert IDs to ObjectId
    if (!mongoose.Types.ObjectId.isValid(courseId) || !mongoose.Types.ObjectId.isValid(subCourseId)) {
      console.log("❌ Invalid Course ID or SubCourse ID format");
      return res.status(400).json({ message: "Invalid Course or SubCourse ID format" });
    }

    const courseObjectId = new mongoose.Types.ObjectId(courseId);
    const subCourseObjectId = new mongoose.Types.ObjectId(subCourseId);

    // ✅ Fetch the Course from the database
    const course = await Course.findById(courseObjectId);
    if (!course) {
      console.log("❌ Course not found in DB");
      return res.status(404).json({ message: "Course not found" });
    }

    console.log(`✅ Course found: ${course.title}`);

    // ✅ Find the sub-course inside the course's `subCourses` array
    const subCourse = course.subCourses.id(subCourseObjectId);
    if (!subCourse) {
      console.log("❌ SubCourse not found in DB");
      return res.status(404).json({ message: "SubCourse not found" });
    }

    console.log(`✅ SubCourse found: ${subCourse.title}`);
    res.json(subCourse);
  } catch (error) {
    console.error("🔥 Error fetching sub-course by ID:", error);
    res.status(500).json({ message: "Error fetching sub-course", error: error.message });
  }
};


module.exports = { getCourses, getCourseById, getSubCourseById };
