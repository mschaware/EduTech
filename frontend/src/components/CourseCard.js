// // CourseCard.js
// import React from "react";
// import { Link } from "react-router-dom";

// const CourseCard = ({ course, darkMode }) => {
//   return (
//     <div className={`flex flex-col items-center ${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-lg shadow-lg w-full`}>
//       {/* Course Title */}
//       <h2 className={`text-3xl font-bold text-center ${darkMode ? "text-purple-400" : "text-purple-600"} py-4 px-8 rounded-md`}>
//         {course.title}
//       </h2>

//       {/* Course Description with Animation */}
//       <div className={`text-xl font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"} ${darkMode ? "bg-gray-700" : "bg-gray-100"} py-4 px-8 mt-6 rounded-md w-full overflow-hidden`}>
//         <p className="inline-block animate-scroll whitespace-nowrap">
//           <marquee behavior="scroll" direction="right">{course.description}</marquee>
//         </p>
//       </div>

//       <br /><br />

//       {/* Sub-Courses Grid */}
//       <div className="w-full flex flex-col items-center">
//         {/* First Row: 3 Languages */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
//           {course.subCourses.slice(0, 3).map((subCourse) => (
//             <div
//               key={subCourse._id}
//               className={`${darkMode ? "bg-gray-700" : "bg-purple-200"} shadow-lg rounded-lg border ${darkMode ? "border-gray-600" : "border-purple-500"} overflow-hidden 
//                 transition-all duration-300 ease-in-out transform hover:scale-105 ${darkMode ? "hover:bg-gray-600" : "hover:bg-purple-300"} 
//                 ${darkMode ? "hover:border-gray-500" : "hover:border-purple-600"} p-6 flex flex-col justify-between h-80 
//                 focus:outline-none focus:ring-4 ${darkMode ? "focus:ring-gray-500" : "focus:ring-purple-600"} focus:scale-105 ${darkMode ? "focus:border-gray-400" : "focus:border-purple-700"}`}
//             >
//               <h4 className={`text-2xl font-semibold ${darkMode ? "text-purple-300" : "text-purple-800"}`}>{subCourse.title}</h4>
//               <p className={`text-lg ${darkMode ? "text-gray-200" : "text-gray-800"} flex-grow`}>{subCourse.description}</p>
//               <div className="mt-4">
//                 <Link
//                   to={`/subcourse/${course._id}/${subCourse._id}`}
//                   className={`text-xl ${darkMode ? "text-blue-400" : "text-blue-700"} font-medium hover:underline focus:ring-2 ${darkMode ? "focus:ring-blue-400" : "focus:ring-blue-600"}`}
//                 >
//                   View Details →
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Second Row: 3 Languages */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl mt-8">
//           {course.subCourses.slice(3, 6).map((subCourse) => (
//             <div
//               key={subCourse._id}
//               className={`${darkMode ? "bg-gray-700" : "bg-purple-200"} shadow-lg rounded-lg border ${darkMode ? "border-gray-600" : "border-purple-500"} overflow-hidden 
//                 transition-all duration-300 ease-in-out transform hover:scale-105 ${darkMode ? "hover:bg-gray-600" : "hover:bg-purple-300"} 
//                 ${darkMode ? "hover:border-gray-500" : "hover:border-purple-600"} p-6 flex flex-col justify-between h-80 
//                 focus:outline-none focus:ring-4 ${darkMode ? "focus:ring-gray-500" : "focus:ring-purple-600"} focus:scale-105 ${darkMode ? "focus:border-gray-400" : "focus:border-purple-700"}`}
//             >
//               <h4 className={`text-2xl font-semibold ${darkMode ? "text-purple-300" : "text-purple-800"}`}>{subCourse.title}</h4>
//               <p className={`text-lg ${darkMode ? "text-gray-200" : "text-gray-800"} flex-grow`}>{subCourse.description}</p>
//               <div className="mt-4">
//                 <Link
//                   to={`/subcourse/${course._id}/${subCourse._id}`}
//                   className={`text-xl ${darkMode ? "text-blue-400" : "text-blue-700"} font-medium hover:underline focus:ring-2 ${darkMode ? "focus:ring-blue-400" : "focus:ring-blue-600"}`}
//                 >
//                   View Details →
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;




import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiBook, FiCode, FiArrowRight, FiAward } from "react-icons/fi";
// import './CourseCard.css';
const CourseCard = ({ course }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl shadow-2xl w-full mb-12 overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

      {/* Course Header */}
      <div className="relative z-10 flex flex-col items-center mb-10">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="p-4 rounded-2xl bg-gray-800 shadow-lg mb-6"
        >
          <FiBook className="text-4xl text-purple-400" />
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400">
          {course.title}
        </h2>
        <motion.p 
          className="text-xl mt-4 text-center text-gray-300 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {course.description}
        </motion.p>
      </div>

      {/* 3D Sub-Courses Grid */}
      <motion.div
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {course.subCourses.map((subCourse, index) => {
          // Assign different gradient colors
          const colors = [
            "from-gray-400 to-purple-900",
            "from-gray-400 to-pink-900",
            "from-gray-400 to-purple-900",
            "from-gray-400 to-pink-900",
            "from-gray-400 to-pink-900"
          ];
          const color = colors[index % colors.length];
          
          return (
            <motion.div
              key={subCourse._id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className="group perspective-1000 h-64"
            >
              <div className="relative w-full h-full transition-all duration-500 preserve-3d group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="absolute backface-hidden w-full h-full bg-gray-800 rounded-xl shadow-lg border border-gray-700 flex flex-col items-center justify-center p-6">
                  <div className="bg-gray-700 p-3 rounded-lg mb-4">
                    <FiCode className="text-3xl text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{subCourse.title}</h3>
                  <p className="text-gray-300 text-center text-sm">
                    {subCourse.description}
                  </p>
                  <div className="mt-6 w-12 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                </div>

                {/* Back of card */}
                <div className={`absolute w-full h-full rounded-xl flex items-center justify-center backface-hidden rotate-y-180 bg-gradient-to-br ${color} p-1 `}>
                  <div className="bg-gray-900 w-full h-full rounded-lg flex flex-col items-center justify-center p-4 transition-all duration-300 hover:bg-opacity-0 hover:text-white ">
                    <h3 className="text-2xl font-bold text-white mb-4">{subCourse.title}</h3>
                    <Link
                      to={`/subcourse/${course._id}/${subCourse._id}`}
                      className="flex items-center px-8 py-3 rounded-lg font-bold text-white bg-purple-900 hover:bg-purple-700 shadow-lg transition-all"
                    >
                      View Details <FiArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-gray-400 text-sm text-center z-10"
      >
      
      </motion.div>
    </motion.div>
  );
};

export default CourseCard;