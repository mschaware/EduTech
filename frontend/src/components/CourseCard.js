// import React from "react";
// import { Link } from "react-router-dom";

// const CourseCard = ({ course }) => {
//   return (
//     <>
//       {/* Course Title */}
//       {/* <h2 className="text-2xl font-semibold text-purple-600">{course.title}</h2>
//       <p className="text-gray-600">{course.description}</p>
//       <p className="mt-2 text-blue-500 font-semibold">Category: {course.category}</p> */}
//       <h2 className="text-3xl items-center font-bold text-purple-600 text-center bg-yellow-200 p-2">
//         {course.title} 
//       </h2><br/>
//       <p className="text-lg font-bold text-gray-700 text-center bg-gray-100 p-2">
//         {course.description}
//       </p><br/>
//       <p className="mt-2 items-center text-blue-500 font-semibold text-center">
//         Category: {course.category}
//       </p><br/>

// <br/>
//       {/* Sub-Courses Heading */}
//       <h3 className="mt-4 text-lg font-medium text-purple-500 text-center">Sub-Courses:</h3>
// <br/><br/>
//       {/* Cards for Each Sub-Course */}
//       <div className="grid grid-cols-3 gap-6 mt-4">
//         {course.subCourses.map((subCourse, index) => (
//           <div
//             key={subCourse._id}
//             className={`bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden transition-transform transform hover:scale-105 p-5 
//               ${index >= 3 ? "col-span-3 md:col-span-2" : ""}`} // First 3 items = 3 columns, next 2 items = 2 columns
//           >
//             <h4 className="text-lg font-semibold text-purple-500">{subCourse.title}</h4>
//             <p className="text-gray-600 text-sm">{subCourse.description}</p>
//             <div className="mt-3">
//               <Link
//                 to={`/subcourse/${course._id}/${subCourse._id}`}
//                 className="text-blue-600 font-medium hover:underline"
//               >
//                 View Details →
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default CourseCard;


// import React from "react";
// import { Link } from "react-router-dom";

// const CourseCard = ({ course }) => {
//   return (
//     <div className="w-screen min-h-screen flex flex-col items-center bg-gray-50 p-10">
//       {/* Course Title */}
//       <h2 className="text-5xl font-bold text-center font-bold text-purple-600  py-4 px-8 rounded-md w-11/12">
//         {course.title}
//       </h2>

//       {/* Course Description */}
//       {/* <p className="text-2xl font-sans text-gray-700 bg-gray-100 py-4 px-8 mt-6 rounded-md w-11/12">
//       <marquee behavior="scroll" direction="right">{course.description}</marquee>
//       </p> */}

// <p className="text-2xl font-semibold text-gray-700 bg-gray-100 py-4 px-8 mt-6 rounded-md w-11/12">
//   <span className="typing-effect">{course.description}</span>
// </p>
//       {/* Course Category */}
//       {/* <p className="mt-4 text-2xl text-blue-500 font-semibold text-purple-600">Category: {course.category}</p> */}

//       {/* Sub-Courses Heading */}
//       {/* <h3 className="mt-8 text-3xl font-medium text-purple-500"></h3> */}

//       {/* Sub-Courses Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 w-11/12">
//         {course.subCourses.map((subCourse) => (
//           <div
//             key={subCourse._id}
//             className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden 
//               transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-100 hover:border-purple-500 p-6 flex flex-col justify-between h-80"
//           >
//             <h4 className="text-2xl font-semibold text-purple-500">{subCourse.title}</h4>
//             <p className="text-lg text-gray-600 flex-grow">{subCourse.description}</p>
//             <div className="mt-4">
//               <Link
//                 to={`/subcourse/${course._id}/${subCourse._id}`}
//                 className="text-xl text-blue-600 font-medium hover:underline"
//               >
//                 View Details →
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CourseCard;



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
