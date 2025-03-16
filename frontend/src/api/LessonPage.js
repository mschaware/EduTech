// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const ProgressBar = ({ percentage }) => {
//   return (
//     <div style={{ width: "100%", background: "#ddd", borderRadius: "8px", marginTop: "10px" }}>
//       <div
//         style={{
//           width: `${percentage}%`,
//           background: "green",
//           height: "10px",
//           borderRadius: "8px",
//         }}
//       ></div>
//     </div>
//   );
// };

// const LessonPage = () => {
//   const { courseId, lessonId } = useParams();
//   const userId = "USER_ID_HERE"; // Replace with actual user ID from authentication
//   const [progress, setProgress] = useState(null);

//   useEffect(() => {
//     // Fetch progress
//     axios.get(`http://localhost:4000/progress/${userId}`)
//       .then((res) => {
//         setProgress(res.data);
//       })
//       .catch((err) => console.error("Error fetching progress:", err));

//     // Auto-update progress when a lesson is accessed
//     axios.post("http://localhost:4000/progress/update", { userId, courseId, lessonId })
//       .then(() => {
//         console.log("Progress updated!");
//       })
//       .catch((err) => console.error("Error updating progress:", err));
//   }, [lessonId]);

//   return (
//     <div>
//       <h2>Lesson Content</h2>
//       <p>Lesson {lessonId} details...</p>

//       {progress && (
//         <div>
//           <p>Course Progress:</p>
//           <ProgressBar percentage={progress.find(p => p.courseId === courseId)?.progressPercentage || 0} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default LessonPage;
