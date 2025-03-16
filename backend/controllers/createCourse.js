const Course = require("../models/course");

exports.createCourse = async (req, res) => {
    try {
        const { title, description, category, subCourses } = req.body;

        // Validation
        if (!title || !description || !category || !subCourses) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Create new course
        const newCourse = new Course({
            title,
            description,
            category,
            subCourses
        });

        // Save to database
        await newCourse.save();

        res.status(201).json({ success: true, message: "Course created successfully!", data: newCourse });

    } catch (error) {
        console.error("Error creating course:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

