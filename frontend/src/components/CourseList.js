// // CourseList.js
// import React, { useEffect, useState } from "react";
// import { getCourses } from "../api/courses";
// import CourseCard from "./CourseCard";

// const CourseList = ({ darkMode }) => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const data = await getCourses();
//         setCourses(data);
//       } catch (error) {
//         console.error("Error fetching courses");
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div className={`${darkMode ? "bg-gray-900" : "bg-gray-100"} p-6 flex justify-center`}>
//       <div className="w-full max-w-6xl"> {/* Constrain width for better alignment */}
//         <div className="grid grid-cols-1 gap-6">
//           {courses.map((course) => (
//             <CourseCard key={course._id} course={course} darkMode={darkMode} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseList;



// CourseList.js
import React, { useEffect, useState } from "react";
import { getCourses } from "../api/courses";
import CourseCard from "./CourseCard";
import { motion } from "framer-motion";

const CourseList = ({ darkMode }) => {
  const [courses, setCourses] = useState([]);
 // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses");
      } finally {
        // setIsLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // if (isLoading) {
  //   return (
  //     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 to-gray-900 flex items-center justify-center">
  //       <div className="flex flex-col items-center">
  //         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500 mb-4"></div>
  //         <p className="text-gray-300 text-lg">Loading courses...</p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 md:p-8 relative overflow-hidden">
      {/* Floating bubbles background */}
      <div className=" ">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute "
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400">

          </h1>
          <p className="text-xl text-gray-300">
           
          </p>
        </motion.div>

        <div className="space-y-12">
          {courses.map((course, index) => (
            <CourseCard 
              key={course._id} 
              course={course} 
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;