
// const Course = require("../models/course");

// const updateProgress = async (req, res) => {
//     try {
//         const { courseId, subCourseId } = req.params;
//         const { completedContentIds } = req.body;

//         // Find the course and sub-course
//         const course = await Course.findById(courseId);
//         if (!course) {
//             return res.status(404).json({ message: "Course not found" });
//         }

//         const subCourse = course.subCourses.id(subCourseId);
//         if (!subCourse) {
//             return res.status(404).json({ message: "SubCourse not found" });
//         }

//         // Update completed status of theory content
//         subCourse.theoryContent.forEach(content => {
//             if (completedContentIds.includes(content._id.toString())) {
//                 content.completed = true;
//             }
//         });

//         // Calculate progress
//         const totalContent = subCourse.theoryContent.length;
//         const completedContent = subCourse.theoryContent.filter(content => content.completed).length;
//         subCourse.progress = (completedContent / totalContent) * 100;

//         // Save the updated course
//         await course.save();

//         res.status(200).json({ success: true, message: "Progress updated successfully!", data: subCourse });
//     } catch (error) {
//         console.error("Error updating progress:", error);
//         res.status(500).json({ success: false, message: "Internal server error" });
//     }
// };

// module.exports = { updateProgress };

const Course = require("../models/course");

const updateProgress = async (req, res) => {
    try {
        const { courseId, subCourseId } = req.params;
        const { contentId, completed, timeSpent } = req.body;

        // Find the course and sub-course
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        const subCourse = course.subCourses.id(subCourseId);
        if (!subCourse) {
            return res.status(404).json({ message: "SubCourse not found" });
        }

        // Find and update the specific content
        const content = subCourse.theoryContent.id(contentId);
        if (!content) {
            return res.status(404).json({ message: "Content not found" });
        }

        // Update content status
        content.completed = completed;
        content.timeSpent = timeSpent || content.timeSpent;

        // Calculate progress based on both completion and time spent
        let totalTimeSpent = 0;
        let totalRequiredTime = 0;
        let completedCount = 0;
        
        subCourse.theoryContent.forEach(item => {
            totalTimeSpent += item.timeSpent || 0;
            totalRequiredTime += item.duration;
            if (item.completed) completedCount++;
        });

        // Calculate both completion-based and time-based progress
        const completionProgress = (completedCount / subCourse.theoryContent.length) * 100;
        const timeBasedProgress = (totalTimeSpent / totalRequiredTime) * 100;
        
        // Use whichever progress is higher
        subCourse.progress = Math.min(100, Math.max(completionProgress, timeBasedProgress));

        // Mark subcourse as completed if all content is completed
        if (subCourse.theoryContent.every(c => c.completed)) {
            subCourse.completed = true;
            subCourse.progress = 100;
        }

        await course.save();

        res.status(200).json({ 
            success: true, 
            message: "Progress updated successfully!", 
            data: {
                progress: subCourse.progress,
                subCourse
            }
        });
    } catch (error) {
        console.error("Error updating progress:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

module.exports = { updateProgress };