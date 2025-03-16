
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