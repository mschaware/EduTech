

import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-gray-100 p-10">
      {/* Course Title */}
      <h2 className="text-5xl font-bold text-center text-purple-600 py-4 px-8 rounded-md w-11/12">
        {course.title}
      </h2>

      {/* Course Description with Animation */}
      <div className="text-2xl font-semibold text-gray-700 bg-gray-100 py-4 px-8 mt-6 rounded-md w-11/12 overflow-hidden">
        <p className="inline-block animate-scroll whitespace-nowrap">
        <marquee behavior="scroll" direction="right">{course.description}</marquee>
        </p>
      </div>

      <br /><br />

      {/* Sub-Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 w-11/12">
        {course.subCourses.map((subCourse) => (
          <div
            key={subCourse._id}
            tabIndex={0} // Makes the div focusable
            className="bg-purple-200  shadow-lg rounded-lg border border-purple-500 overflow-hidden 
              transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-300 
              hover:border-purple-600 p-6 flex flex-col justify-between h-80 
              focus:outline-none focus:ring-4 focus:ring-purple-600 focus:scale-105 focus:border-purple-700"
          >
            <h4 className="text-2xl font-semibold text-purple-800">{subCourse.title}</h4>
            <p className="text-lg text-gray-800 flex-grow">{subCourse.description}</p>
            <div className="mt-4">
              <Link
                to={`/subcourse/${course._id}/${subCourse._id}`}
                className="text-xl text-blue-700 font-medium hover:underline focus:ring-2 focus:ring-blue-600"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
