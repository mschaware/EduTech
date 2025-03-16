// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getSubCourseById } from "../api/courses";

// const SubCourseDetails = () => {
//   const { courseId, subCourseId } = useParams();
//   const [subCourse, setSubCourse] = useState(null);

//   useEffect(() => {
//     const fetchSubCourse = async () => {
//       try {
//         const data = await getSubCourseById(courseId, subCourseId);
//         setSubCourse(data);
//       } catch (error) {
//         console.error("Failed to fetch sub-course details");
//       }
//     };

//     fetchSubCourse();
//   }, [courseId, subCourseId]);

//   if (!subCourse) return <div className="p-6">Loading...</div>;

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold text-purple-600">{subCourse.title}</h2>
//       <p className="text-gray-700">{subCourse.description}</p>

//       <h3 className="mt-4 text-lg font-semibold text-purple-600">Theory Content:</h3>
//       <ul className="list-disc pl-6">
//         {subCourse.theoryContent.map((content) => (
//           <li key={content._id} className="mt-2">
//             <strong className="text-purple-600">{content.title}:</strong> {content.content}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SubCourseDetails;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getSubCourseById } from "../api/courses";

// const SubCourseDetails = () => {
//   const { courseId, subCourseId } = useParams();
//   const [subCourse, setSubCourse] = useState(null);

//   useEffect(() => {
//     const fetchSubCourse = async () => {
//       try {
//         const data = await getSubCourseById(courseId, subCourseId);
//         setSubCourse(data);
//       } catch (error) {
//         console.error("Failed to fetch sub-course details");
//       }
//     };

//     fetchSubCourse();
//   }, [courseId, subCourseId]);

//   if (!subCourse) return <div className="p-6">Loading...</div>;

//   return (
//     <div className="p-6 flex flex-col items-center text-center">
//       <h2 className="text-2xl font-bold text-purple-600">{subCourse.title}</h2>
//       <p className="text-gray-700 max-w-3xl">{subCourse.description}</p>

//       <h3 className="mt-4 text-lg font-semibold text-purple-500">Theory Content:</h3>
//       <ul className="list-disc pl-6 max-w-3xl text-left">
//         {subCourse.theoryContent.map((content) => (
//           <li key={content.id} className="mt-2 p-6 bg-gray-100 rounded-lg text-center">
//             <strong className="text-purple-700">{content.title}:</strong> <br />
//             {content.content}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SubCourseDetails;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getSubCourseById } from "../api/courses";
// import SyntaxHighlighter from "react-syntax-highlighter"; // For code syntax highlighting
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"; // Code highlighting theme

// const SubCourseDetails = () => {
//   const { courseId, subCourseId } = useParams();
//   const [subCourse, setSubCourse] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSubCourse = async () => {
//       try {
//         const data = await getSubCourseById(courseId, subCourseId);
//         setSubCourse(data);
//         setError(null); // Clear any previous errors
//       } catch (error) {
//         console.error("Failed to fetch sub-course details");
//         setError("Failed to load sub-course details. Please try again later.");
//       }
//     };

//     fetchSubCourse();
//   }, [courseId, subCourseId]);

//   if (error) {
//     return <div className="p-6 text-red-600">{error}</div>;
//   }

//   if (!subCourse) {
//     return <div className="p-6">Loading...</div>;
//   }

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold text-purple-600">{subCourse.title}</h2>
//       <p className="text-gray-700 mt-2">{subCourse.description}</p>

//       <h3 className="mt-6 text-lg font-semibold text-purple-600">
//         Theory Content:
//       </h3>
//       <ul className="mt-4 space-y-4">
//         {subCourse.theoryContent.map((content) => (
//           <li
//             key={content.id}
//             className="p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200 text-1.5xl"
//           >
//             <strong className="text-purple-700 text-lg font-bold">{content.title}</strong>
//             <div className="mt-2 text-gray-700">
//               {content.id === 1021 ? ( // Special styling for id: 1021
//                 <div
//                   className="bg-white p-4 rounded-md border border-gray-200"
//                   dangerouslySetInnerHTML={{ __html: content.content }}
//                 />
//               ) : (
//                 <SyntaxHighlighter language="c" style={docco}>
//                   {content.content}
//                 </SyntaxHighlighter>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SubCourseDetails;


// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { getSubCourseById, updateProgress } from "../api/courses"; // Import the updateProgress function

// const SubCourseDetails = () => {
//     const { courseId, subCourseId } = useParams();
//     const [subCourse, setSubCourse] = useState(null);
//     const [error, setError] = useState(null);
//     const [completedContentIds, setCompletedContentIds] = useState([]);

//     // Fetch sub-course details
//     useEffect(() => {
//         const fetchSubCourse = async () => {
//             try {
//                 const data = await getSubCourseById(courseId, subCourseId);
//                 setSubCourse(data);
//                 setError(null);
//             } catch (error) {
//                 console.error("Failed to fetch sub-course details");
//                 setError("Failed to load sub-course details. Please try again later.");
//             }
//         };

//         fetchSubCourse();
//     }, [courseId, subCourseId]);

//     // Handle marking content as completed
//     const handleContentCompletion = async (contentId) => {
//         const updatedCompletedContentIds = [...completedContentIds, contentId];
//         setCompletedContentIds(updatedCompletedContentIds);

//         try {
//             // Call the backend to update progress
//             await updateProgress(courseId, subCourseId, { completedContentIds: updatedCompletedContentIds });

//             // Fetch the updated sub-course data
//             const updatedSubCourse = await getSubCourseById(courseId, subCourseId);
//             setSubCourse(updatedSubCourse);
//         } catch (error) {
//             console.error("Failed to update progress");
//         }
//     };

//     if (error) {
//         return <div className="p-6 text-red-600">{error}</div>;
//     }

//     if (!subCourse) {
//         return <div className="p-6">Loading...</div>;
//     }

//     return (
//         <div className="p-6">
//             <h2 className="text-2xl font-bold text-purple-600">{subCourse.title}</h2>
//             <p className="text-gray-700 mt-2">{subCourse.description}</p>

//             <h3 className="mt-6 text-lg font-semibold text-purple-600">
//                 Theory Content:
//             </h3>
//             <ul className="mt-4 space-y-4">
//                 {subCourse.theoryContent.map((content) => (
//                     <li
//                         key={content.id}
//                         className="p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200 text-1.5xl"
//                     >
//                         <strong className="text-purple-700 text-lg font-bold">{content.title}</strong>
//                         <div className="mt-2 text-gray-700">
//                             {content.content}
//                         </div>
//                         <button
//                             onClick={() => handleContentCompletion(content._id)}
//                             className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-md"
//                         >
//                             Mark as Completed
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default SubCourseDetails;

// //pages/SubCourseDetails.js
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getSubCourseById } from "../api/courses";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import axios from "axios";

// const SubCourseDetails = () => {
//     const { courseId, subCourseId } = useParams();
//     const [subCourse, setSubCourse] = useState(null);
//     const [error, setError] = useState(null);
//     const [progress, setProgress] = useState(0);

//     useEffect(() => {
//         const fetchSubCourse = async () => {
//             try {
//                 const data = await getSubCourseById(courseId, subCourseId);
//                 setSubCourse(data);
//                 setError(null);
//                 calculateProgress(data.theoryContent); // Calculate initial progress
//             } catch (error) {
//                 console.error("Failed to fetch sub-course details");
//                 setError("Failed to load sub-course details. Please try again later.");
//             }
//         };

//         fetchSubCourse();
//     }, [courseId, subCourseId]);

//     const calculateProgress = (theoryContent) => {
//         const completedCount = theoryContent.filter((content) => content.completed).length;
//         const totalCount = theoryContent.length;
//         const progressPercentage = (completedCount / totalCount) * 100;
//         setProgress(progressPercentage);
//     };

//     const handleCheckboxChange = async (contentId, completed) => {
//         try {
//             await axios.post("http://localhost:4000/api/v1/updateProgress", {
//                 courseId,
//                 subCourseId,
//                 contentId,
//                 completed,
//             });

//             // Update the local state
//             const updatedTheoryContent = subCourse.theoryContent.map((content) =>
//                 content._id === contentId ? { ...content, completed } : content
//             );

//             setSubCourse({ ...subCourse, theoryContent: updatedTheoryContent });
//             calculateProgress(updatedTheoryContent); // Recalculate progress
//         } catch (error) {
//             console.error("Error updating progress:", error);
//         }
//     };

//     if (error) {
//         return <div className="p-6 text-red-600">{error}</div>;
//     }

//     if (!subCourse) {
//         return <div className="p-6">Loading...</div>;
//     }

//     return (
//         <div className="p-6">
//             <h2 className="text-2xl font-bold text-purple-600">{subCourse.title}</h2>
//             <p className="text-gray-700 mt-2">{subCourse.description}</p>

//             <div className="mt-4">
//                 <h3 className="text-lg font-semibold text-purple-600">Progress: {progress.toFixed(2)}%</h3>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5">
//                     <div
//                         className="bg-purple-600 h-2.5 rounded-full"
//                         style={{ width: `${progress}%` }}
//                     ></div>
//                 </div>
//             </div>

//             <h3 className="mt-6 text-lg font-semibold text-purple-600">Theory Content:</h3>
//             <ul className="mt-4 space-y-4">
//                 {subCourse.theoryContent.map((content) => (
//                     <li
//                         key={content._id}
//                         className="p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200 text-1.5xl"
//                     >
//                         <div className="flex items-center justify-between">
//                             <strong className="text-purple-700 text-lg font-bold">{content.title}</strong>
//                             <input
//                                 type="checkbox"
//                                 checked={content.completed}
//                                 onChange={(e) => handleCheckboxChange(content._id, e.target.checked)}
//                                 className="ml-4"
//                             />
//                         </div>
//                         <div className="mt-2 text-gray-700">
//                             {content._id === "1021" ? (
//                                 <div
//                                     className="bg-white p-4 rounded-md border border-gray-200"
//                                     dangerouslySetInnerHTML={{ __html: content.content }}
//                                 />
//                             ) : (
//                                 <SyntaxHighlighter language="c" style={docco}>
//                                     {content.content}
//                                 </SyntaxHighlighter>
//                             )}
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default SubCourseDetails;


//imp code
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSubCourseById } from "../api/courses";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import axios from "axios";

const SubCourseDetails = () => {
    const { courseId, subCourseId } = useParams();
    const [subCourse, setSubCourse] = useState(null);
    const [error, setError] = useState(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const fetchSubCourse = async () => {
            try {
                const data = await getSubCourseById(courseId, subCourseId);
                setSubCourse(data);
                setError(null);
                calculateProgress(data.theoryContent); // Calculate initial progress
            } catch (error) {
                console.error("Failed to fetch sub-course details");
                setError("Failed to load sub-course details. Please try again later.");
            }
        };

        fetchSubCourse();
    }, [courseId, subCourseId]);

    const calculateProgress = (theoryContent) => {
        const completedCount = theoryContent.filter((content) => content.completed).length;
        const totalCount = theoryContent.length;
        const progressPercentage = (completedCount / totalCount) * 100;
        setProgress(progressPercentage);
    };

    const handleCheckboxChange = async (contentId, completed) => {
        try {
            await axios.post("http://localhost:4000/api/v1/updateProgress", {
                courseId,
                subCourseId,
                contentId,
                completed,
            });

            // Update the local state
            const updatedTheoryContent = subCourse.theoryContent.map((content) =>
                content._id === contentId ? { ...content, completed } : content
            );

            setSubCourse({ ...subCourse, theoryContent: updatedTheoryContent });
            calculateProgress(updatedTheoryContent); // Recalculate progress
        } catch (error) {
            console.error("Error updating progress:", error);
        }
    };

    if (error) {
        return <div className="p-6 text-red-600">{error}</div>;
    }

    if (!subCourse) {
        return <div className="p-6">Loading...</div>;
    }

    // Calculate the strokeDashoffset for the circular progress bar
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="p-6 relative">
            {/* Circular Progress Bar in the top-right corner */}
            <div className="absolute top-6 right-6 w-20 h-20">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                        className="text-gray-200 stroke-current" // Background circle
                        strokeWidth="10"
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="transparent"
                    />
                    <circle
                        className="text-purple-600 stroke-current" // Progress circle
                        strokeWidth="10"
                        strokeLinecap="round"
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        transform="rotate(-90 50 50)" // Start progress from the top
                    />
                    <text
                        className="text-lg font-bold text-gray-700" // Progress percentage
                        x="50"
                        y="50"
                        dominantBaseline="middle"
                        textAnchor="middle"
                    >
                        {progress.toFixed(0)}%
                    </text>
                </svg>
            </div>

            <h2 className="text-2xl font-bold text-purple-600">{subCourse.title}</h2>
            <p className="text-gray-700 mt-2">{subCourse.description}</p>

            <h3 className="mt-6 text-lg font-semibold text-purple-600">Theory Content:</h3>
            <ul className="mt-4 space-y-4">
                {subCourse.theoryContent.map((content) => {
                    const timerMinutes = Math.floor(content.duration / 60); // Convert duration to minutes
                    return (
                        <li
                            key={content._id}
                            className="p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200 text-1.5xl"
                        >
                            <div className="flex items-center">
                                {/* Checkbox before the title */}
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={content.completed}
                                        onChange={(e) => handleCheckboxChange(content._id, e.target.checked)}
                                        className="mr-2"
                                    />
                                </label>
                                {/* Title with specific time */}
                                <strong className="text-purple-700 text-lg font-bold">
                                    {content.title} <span className="text-gray-500">({timerMinutes} min)</span>
                                </strong>
                            </div>
                            <div className="mt-2 text-gray-700">
                                {content._id === "1021" ? (
                                    <div
                                        className="bg-white p-4 rounded-md border border-gray-200"
                                        dangerouslySetInnerHTML={{ __html: content.content }}
                                    />
                                ) : (
                                    <SyntaxHighlighter language="c" style={docco}>
                                        {content.content}
                                    </SyntaxHighlighter>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SubCourseDetails;



// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import getSubCourseById  from "../api/courses";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

// const SubCourseDetails = () => {
//     const { courseId, subCourseId } = useParams();
//     const [subCourse, setSubCourse] = useState(null);
//     const [error, setError] = useState(null);
//     const [completedContentIds, setCompletedContentIds] = useState([]);
//     const [contentTimers, setContentTimers] = useState({});
//     const [viewedContent, setViewedContent] = useState({});
//     const [progress, setProgress] = useState(0);

//     useEffect(() => {
//         const fetchSubCourse = async () => {
//             try {
//                 const { data } = await axios.get(`/api/courses/${courseId}/subcourses/${subCourseId}`);
//                 setSubCourse(data);
//                 setCompletedContentIds(data.completedContentIds || []);
//                 setError(null);
//             } catch (error) {
//                 console.error("Failed to fetch sub-course details", error);
//                 setError("Failed to load sub-course details. Please try again later.");
//             }
//         };

//         fetchSubCourse();
//     }, [courseId, subCourseId]);

//     // Function to start a timer for each content
//     const startTimer = (contentId, contentLength) => {
//         if (!contentTimers[contentId]) {
//             const timeRequired = contentLength > 500 ? 4 * 60 * 1000 : 2 * 60 * 1000; // 4 min for long content, 2 min otherwise
            
//             const timer = setTimeout(() => {
//                 setViewedContent((prev) => ({ ...prev, [contentId]: true }));
//                 updateProgressState(contentId);
//             }, timeRequired);

//             setContentTimers((prev) => ({ ...prev, [contentId]: timer }));
//         }
//     };

//     // Function to update progress
//     const updateProgressState = (contentId) => {
//         if (!completedContentIds.includes(contentId)) {
//             const updatedCompletedContentIds = [...completedContentIds, contentId];
//             setCompletedContentIds(updatedCompletedContentIds);

//             const progressPercentage = (updatedCompletedContentIds.length / subCourse.theoryContent.length) * 100;
//             setProgress(progressPercentage);

//             axios.post(`/api/courses/${courseId}/subcourses/${subCourseId}/progress`, {
//                 completedContentIds: updatedCompletedContentIds,
//             });
//         }
//     };

//     if (error) return <div className="p-6 text-red-600">{error}</div>;
//     if (!subCourse) return <div className="p-6">Loading...</div>;

//     return (
//         <div className="p-6">
//             <h2 className="text-2xl font-bold text-purple-600">{subCourse.title}</h2>
//             <p className="text-gray-700 mt-2">{subCourse.description}</p>

//             <h3 className="mt-6 text-lg font-semibold text-purple-600">
//                 Theory Content:
//             </h3>
//             <ul className="mt-4 space-y-4">
//                 {subCourse.theoryContent.map((content) => {
//                     const timeRequired = content.content.length > 500 ? "4 min" : "2 min";
//                     return (
//                         <li
//                             key={content.id}
//                             id={content.id}
//                             className="p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200 text-1.5xl overflow-y-auto max-h-60"
//                             onMouseEnter={() => startTimer(content.id, content.content.length)}
//                         >
//                             <div className="flex items-center">
//                                 <input
//                                     type="checkbox"
//                                     checked={viewedContent[content.id] || false}
//                                     className="mr-2"
//                                     readOnly
//                                 />
//                                 <strong className="text-purple-700 text-lg font-bold">
//                                     {content.title}
//                                 </strong>
//                                 <span className="ml-2 text-gray-500">({timeRequired})</span>
//                             </div>
//                             <div className="mt-2 text-gray-700">
//                                 {content.isCode ? (
//                                     <SyntaxHighlighter language="javascript" style={docco}>
//                                         {content.content}
//                                     </SyntaxHighlighter>
//                                 ) : (
//                                     content.content
//                                 )}
//                             </div>
//                         </li>
//                     );
//                 })}
//             </ul>

//             {/* Display Progress */}
//             <div className="mt-6">
//                 <h3 className="text-lg font-semibold text-purple-600">Progress:</h3>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5">
//                     <div
//                         className="bg-purple-600 h-2.5 rounded-full"
//                         style={{ width: `${progress}%` }}
//                     ></div>
//                 </div>
//                 <p className="text-sm text-gray-700 mt-1">{progress.toFixed(2)}% Complete</p>
//             </div>
//         </div>
//     );
// };

// export default SubCourseDetails;
