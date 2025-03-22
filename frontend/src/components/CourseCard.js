// CourseCard.js
import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course, darkMode }) => {
  return (
    <div className={`flex flex-col items-center ${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-lg shadow-lg w-full`}>
      {/* Course Title */}
      <h2 className={`text-3xl font-bold text-center ${darkMode ? "text-purple-400" : "text-purple-600"} py-4 px-8 rounded-md`}>
        {course.title}
      </h2>

      {/* Course Description with Animation */}
      <div className={`text-xl font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"} ${darkMode ? "bg-gray-700" : "bg-gray-100"} py-4 px-8 mt-6 rounded-md w-full overflow-hidden`}>
        <p className="inline-block animate-scroll whitespace-nowrap">
          <marquee behavior="scroll" direction="right">{course.description}</marquee>
        </p>
      </div>

      <br /><br />

      {/* Sub-Courses Grid */}
      <div className="w-full flex flex-col items-center">
        {/* First Row: 3 Languages */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
          {course.subCourses.slice(0, 3).map((subCourse) => (
            <div
              key={subCourse._id}
              className={`${darkMode ? "bg-gray-700" : "bg-purple-200"} shadow-lg rounded-lg border ${darkMode ? "border-gray-600" : "border-purple-500"} overflow-hidden 
                transition-all duration-300 ease-in-out transform hover:scale-105 ${darkMode ? "hover:bg-gray-600" : "hover:bg-purple-300"} 
                ${darkMode ? "hover:border-gray-500" : "hover:border-purple-600"} p-6 flex flex-col justify-between h-80 
                focus:outline-none focus:ring-4 ${darkMode ? "focus:ring-gray-500" : "focus:ring-purple-600"} focus:scale-105 ${darkMode ? "focus:border-gray-400" : "focus:border-purple-700"}`}
            >
              <h4 className={`text-2xl font-semibold ${darkMode ? "text-purple-300" : "text-purple-800"}`}>{subCourse.title}</h4>
              <p className={`text-lg ${darkMode ? "text-gray-200" : "text-gray-800"} flex-grow`}>{subCourse.description}</p>
              <div className="mt-4">
                <Link
                  to={`/subcourse/${course._id}/${subCourse._id}`}
                  className={`text-xl ${darkMode ? "text-blue-400" : "text-blue-700"} font-medium hover:underline focus:ring-2 ${darkMode ? "focus:ring-blue-400" : "focus:ring-blue-600"}`}
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row: 3 Languages */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl mt-8">
          {course.subCourses.slice(3, 6).map((subCourse) => (
            <div
              key={subCourse._id}
              className={`${darkMode ? "bg-gray-700" : "bg-purple-200"} shadow-lg rounded-lg border ${darkMode ? "border-gray-600" : "border-purple-500"} overflow-hidden 
                transition-all duration-300 ease-in-out transform hover:scale-105 ${darkMode ? "hover:bg-gray-600" : "hover:bg-purple-300"} 
                ${darkMode ? "hover:border-gray-500" : "hover:border-purple-600"} p-6 flex flex-col justify-between h-80 
                focus:outline-none focus:ring-4 ${darkMode ? "focus:ring-gray-500" : "focus:ring-purple-600"} focus:scale-105 ${darkMode ? "focus:border-gray-400" : "focus:border-purple-700"}`}
            >
              <h4 className={`text-2xl font-semibold ${darkMode ? "text-purple-300" : "text-purple-800"}`}>{subCourse.title}</h4>
              <p className={`text-lg ${darkMode ? "text-gray-200" : "text-gray-800"} flex-grow`}>{subCourse.description}</p>
              <div className="mt-4">
                <Link
                  to={`/subcourse/${course._id}/${subCourse._id}`}
                  className={`text-xl ${darkMode ? "text-blue-400" : "text-blue-700"} font-medium hover:underline focus:ring-2 ${darkMode ? "focus:ring-blue-400" : "focus:ring-blue-600"}`}
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;