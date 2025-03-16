const mongoose = require('mongoose');

// Theory Content Schema
const TheoryContentSchema = new mongoose.Schema({
    title: { type: String, required: true }, 
    content: { type: String, required: true },
    completed: { type: Boolean, default: false }, 
    // Rich text or markdown
    createdAt: { type: Date, default: Date.now }
});

// SubCourse Schema
const SubCourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    theoryContent: [TheoryContentSchema], // Embedded array of theory content
    progress: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

// Course Schema
const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    category: { type: String },  // Example: "Programming", "Data Science"
    subCourses: [SubCourseSchema], // Embedded array of sub-courses
    createdAt: { type: Date, default: Date.now }
});



// Create Models
const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
