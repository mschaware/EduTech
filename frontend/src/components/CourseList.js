// CourseList.js
import React, { useEffect, useState } from "react";
import { getCourses } from "../api/courses";
import CourseCard from "./CourseCard";

const CourseList = ({ darkMode }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses");
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className={`${darkMode ? "bg-gray-900" : "bg-gray-100"} p-6 flex justify-center`}>
      <div className="w-full max-w-6xl"> {/* Constrain width for better alignment */}
        <div className="grid grid-cols-1 gap-6">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;