// // controllers/updateProgress.js
// const Course = require("../models/course");

// exports.updateProgress = async (req, res) => {
//     try {
//         const { courseId, subCourseId, contentId, completed } = req.body;

//         // Find the course and subcourse
//         const course = await Course.findById(courseId);
//         if (!course) {
//             return res.status(404).json({ message: "Course not found" });
//         }

//         const subCourse = course.subCourses.id(subCourseId);
//         if (!subCourse) {
//             return res.status(404).json({ message: "SubCourse not found" });
//         }

//         // Find the theory content and update its completed status
//         const theoryContent = subCourse.theoryContent.id(contentId);
//         if (!theoryContent) {
//             return res.status(404).json({ message: "Theory content not found" });
//         }

//         theoryContent.completed = completed;
//         await course.save();

//         res.status(200).json({ success: true, message: "Progress updated successfully" });
//     } catch (error) {
//         console.error("Error updating progress:", error);
//         res.status(500).json({ success: false, message: "Internal server error" });
//     }
// };


// // const Course = require("../models/course");

// // exports.updateTimeSpent = async (req, res) => {
// //     try {
// //         const { courseId, subCourseId, contentId, timeSpent } = req.body;

// //         // Find the course and subcourse
// //         const course = await Course.findById(courseId);
// //         if (!course) {
// //             return res.status(404).json({ message: "Course not found" });
// //         }

// //         const subCourse = course.subCourses.id(subCourseId);
// //         if (!subCourse) {
// //             return res.status(404).json({ message: "SubCourse not found" });
// //         }

// //         // Find the theory content and update its timeSpent
// //         const theoryContent = subCourse.theoryContent.id(contentId);
// //         if (!theoryContent) {
// //             return res.status(404).json({ message: "Theory content not found" });
// //         }

// //         theoryContent.timeSpent += timeSpent; // Increment time spent
// //         await course.save();

// //         res.status(200).json({ success: true, message: "Time spent updated successfully" });
// //     } catch (error) {
// //         console.error("Error updating time spent:", error);
// //         res.status(500).json({ success: false, message: "Internal server error" });
// //     }
// // };


const Course = require("../models/course");

const updateProgress = async (req, res) => {
    try {
        const { courseId, subCourseId } = req.params;
        const { completedContentIds } = req.body;

        // Find the course and sub-course
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        const subCourse = course.subCourses.id(subCourseId);
        if (!subCourse) {
            return res.status(404).json({ message: "SubCourse not found" });
        }

        // Update completed status of theory content
        subCourse.theoryContent.forEach(content => {
            if (completedContentIds.includes(content._id.toString())) {
                content.completed = true;
            }
        });

        // Calculate progress
        const totalContent = subCourse.theoryContent.length;
        const completedContent = subCourse.theoryContent.filter(content => content.completed).length;
        subCourse.progress = (completedContent / totalContent) * 100;

        // Save the updated course
        await course.save();

        res.status(200).json({ success: true, message: "Progress updated successfully!", data: subCourse });
    } catch (error) {
        console.error("Error updating progress:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

module.exports = { updateProgress };