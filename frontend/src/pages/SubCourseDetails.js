
// //imp code
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

//     // Calculate the strokeDashoffset for the circular progress bar
//     const radius = 40;
//     const circumference = 2 * Math.PI * radius;
//     const strokeDashoffset = circumference - (progress / 100) * circumference;

//     return (
//         <div className="p-6 relative">
//             {/* Circular Progress Bar in the top-right corner */}
//             <div className="absolute top-6 right-6 w-20 h-20">
//                 <svg className="w-full h-full" viewBox="0 0 100 100">
//                     <circle
//                         className="text-gray-200 stroke-current" // Background circle
//                         strokeWidth="10"
//                         cx="50"
//                         cy="50"
//                         r={radius}
//                         fill="transparent"
//                     />
//                     <circle
//                         className="text-purple-600 stroke-current" // Progress circle
//                         strokeWidth="10"
//                         strokeLinecap="round"
//                         cx="50"
//                         cy="50"
//                         r={radius}
//                         fill="transparent"
//                         strokeDasharray={circumference}
//                         strokeDashoffset={strokeDashoffset}
//                         transform="rotate(-90 50 50)" // Start progress from the top
//                     />
//                     <text
//                         className="text-lg font-bold text-gray-700" // Progress percentage
//                         x="50"
//                         y="50"
//                         dominantBaseline="middle"
//                         textAnchor="middle"
//                     >
//                         {progress.toFixed(0)}%
//                     </text>
//                 </svg>
//             </div>

//             <h2 className="text-2xl font-bold text-purple-600">{subCourse.title}</h2>
//             <p className="text-gray-700 mt-2">{subCourse.description}</p>

//             <h3 className="mt-6 text-lg font-semibold text-purple-600">Theory Content:</h3>
//             <ul className="mt-4 space-y-4">
//                 {subCourse.theoryContent.map((content) => {
//                     const timerMinutes = Math.floor(content.duration / 60); // Convert duration to minutes
//                     return (
//                         <li
//                             key={content._id}
//                             className="p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200 text-1.5xl"
//                         >
//                             <div className="flex items-center">
//                                 {/* Checkbox before the title */}
//                                 <label className="flex items-center">
//                                     <input
//                                         type="checkbox"
//                                         checked={content.completed}
//                                         onChange={(e) => handleCheckboxChange(content._id, e.target.checked)}
//                                         className="mr-2"
//                                     />
//                                 </label>
//                                 {/* Title with specific time */}
//                                 <strong className="text-purple-700 text-lg font-bold">
//                                     {content.title} <span className="text-gray-500">({timerMinutes} min)</span>
//                                 </strong>
//                             </div>
//                             <div className="mt-2 text-gray-700">
//                                 {content._id === "1021" ? (
//                                     <div
//                                         className="bg-white p-4 rounded-md border border-gray-200"
//                                         dangerouslySetInnerHTML={{ __html: content.content }}
//                                     />
//                                 ) : (
//                                     <SyntaxHighlighter language="c" style={docco}>
//                                         {content.content}
//                                     </SyntaxHighlighter>
//                                 )}
//                             </div>
//                         </li>
//                     );
//                 })}
//             </ul>
//         </div>
//     );
// };

// export default SubCourseDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSubCourseById } from "../api/courses";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import axios from "axios";
import { FiCheck, FiClock, FiBook, FiAlertCircle, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const SubCourseDetails = () => {
    const { courseId, subCourseId } = useParams();
    const [subCourse, setSubCourse] = useState(null);
    const [error, setError] = useState(null);
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [expandedContent, setExpandedContent] = useState(null);

    useEffect(() => {
        const fetchSubCourse = async () => {
            try {
                setIsLoading(true);
                const data = await getSubCourseById(courseId, subCourseId);
                setSubCourse(data);
                setError(null);
                calculateProgress(data.theoryContent);
            } catch (error) {
                console.error("Failed to fetch sub-course details");
                setError("Failed to load sub-course details. Please try again later.");
            } finally {
                setIsLoading(false);
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

            const updatedTheoryContent = subCourse.theoryContent.map((content) =>
                content._id === contentId ? { ...content, completed } : content
            );

            setSubCourse({ ...subCourse, theoryContent: updatedTheoryContent });
            calculateProgress(updatedTheoryContent);
        } catch (error) {
            console.error("Error updating progress:", error);
        }
    };

    const toggleContent = (contentId) => {
        setExpandedContent(expandedContent === contentId ? null : contentId);
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="flex flex-col items-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600 mb-6"
                    ></motion.div>
                    <motion.p 
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
                        className="text-gray-600 text-lg font-medium"
                    >
                        Loading course content...
                    </motion.p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center"
                >
                    <div className="text-red-500 flex justify-center mb-6">
                        <FiAlertCircle size={56} className="animate-pulse" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Error Loading Content</h2>
                    <p className="text-gray-600 mb-8">{error}</p>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => window.location.reload()}
                        className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all"
                    >
                        Try Again
                    </motion.button>
                </motion.div>
            </div>
        );
    }

    if (!subCourse) return null;

    // Circular progress bar calculations
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-900 p-4 md:p-8">
            <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full"></div>
                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                            <div className="mb-6 md:mb-0">
                                <div className="flex items-center mb-4">
                                    <div className="p-3 bg-purple-100 rounded-lg mr-4">
                                        <FiBook className="text-purple-600 text-xl" />
                                    </div>
                                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400">
                                        {subCourse.title}
                                    </h1>
                                </div>
                                <p className="text-gray-600 text-lg max-w-2xl">{subCourse.description}</p>
                            </div>
                            
                            {/* Progress Circle */}
                            <motion.div 
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                className="relative w-28 h-28"
                            >
                                <svg className="w-full h-full" viewBox="0 0 100 100">
                                    <circle
                                        className="text-purple-100 stroke-current"
                                        strokeWidth="10"
                                        cx="50"
                                        cy="50"
                                        r={radius}
                                        fill="transparent"
                                    />
                                    <motion.circle
                                        initial={{ strokeDashoffset: circumference }}
                                        animate={{ strokeDashoffset }}
                                        transition={{ duration: 1, ease: "easeInOut" }}
                                        className="text-purple-600 stroke-current"
                                        strokeWidth="10"
                                        strokeLinecap="round"
                                        cx="50"
                                        cy="50"
                                        r={radius}
                                        fill="transparent"
                                        strokeDasharray={circumference}
                                        strokeDashoffset={strokeDashoffset}
                                        transform="rotate(-90 50 50)"
                                    />
                                    <text
                                        className="text-xl font-bold text-gray-800"
                                        x="50"
                                        y="50"
                                        dominantBaseline="middle"
                                        textAnchor="middle"
                                    >
                                        {progress.toFixed(0)}%
                                    </text>
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-sm font-medium text-gray-500 mt-16">Progress</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Content Sections */}
                <div className="space-y-8">
                    <motion.h2 
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl font-bold text-gray-800 flex items-center"
                    >
                        <div className="p-2 bg-purple-100 rounded-lg mr-4">
                            <FiCheck className="text-purple-600 text-xl" />
                        </div>
                        Course Content
                    </motion.h2>

                    <AnimatePresence>
                        {subCourse.theoryContent.map((content) => {
                            const timerMinutes = Math.floor(content.duration / 60);
                            const isExpanded = expandedContent === content._id;
                            
                            return (
                                <motion.div 
                                    key={content._id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`bg-white rounded-2xl shadow-sm overflow-hidden border ${
                                        content.completed 
                                            ? 'border-green-200 bg-green-50' 
                                            : 'border-gray-200 hover:border-purple-200'
                                    } transition-all duration-200 hover:shadow-md`}
                                >
                                    <div className="p-0">
                                        <div 
                                            className="flex items-start p-6 cursor-pointer"
                                            onClick={() => toggleContent(content._id)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    e.preventDefault();
                                                    toggleContent(content._id);
                                                }
                                            }}
                                            tabIndex="0"
                                            role="button"
                                            aria-expanded={isExpanded}
                                        >
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleCheckboxChange(content._id, !content.completed);
                                                }}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter' || e.key === ' ') {
                                                        e.preventDefault();
                                                        handleCheckboxChange(content._id, !content.completed);
                                                    }
                                                }}
                                                className={`mr-4 flex-shrink-0 w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-all ${
                                                    content.completed 
                                                        ? 'bg-green-500 border-green-500 text-white shadow-inner' 
                                                        : 'border-gray-300 hover:border-purple-400 hover:bg-purple-50'
                                                }`}
                                                aria-label={content.completed ? 'Mark as incomplete' : 'Mark as complete'}
                                            >
                                                {content.completed && <FiCheck size={16} />}
                                            </button>
                                            <div className="flex-1">
                                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                                                    <h3 className={`text-xl font-semibold ${
                                                        content.completed ? 'text-green-700' : 'text-gray-800'
                                                    }`}>
                                                        {content.title}
                                                    </h3>
                                                    <span className="flex items-center text-sm text-gray-600 bg-gray-100 px-4 py-1.5 rounded-full">
                                                        <FiClock className="mr-2" /> {timerMinutes} min
                                                    </span>
                                                </div>
                                                
                                                <motion.div 
                                                    className="flex items-center mt-4 text-purple-600 text-sm font-medium"
                                                    animate={{ 
                                                        opacity: isExpanded ? 0 : 1,
                                                        height: isExpanded ? 0 : 'auto'
                                                    }}
                                                >
                                                    <span>Click to {isExpanded ? 'collapse' : 'expand'} content</span>
                                                    <FiChevronRight className={`ml-1 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                                                </motion.div>
                                            </div>
                                        </div>

                                        <AnimatePresence>
                                            {isExpanded && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-6 pb-6 -mt-2">
                                                        {content._id === "1021" ? (
                                                            <div 
                                                                className="prose max-w-none text-gray-700" 
                                                                dangerouslySetInnerHTML={{ __html: content.content }}
                                                            />
                                                        ) : (
                                                            <SyntaxHighlighter 
                                                                language="c" 
                                                                style={atomOneDark}
                                                                customStyle={{
                                                                    borderRadius: '0.75rem',
                                                                    padding: '1.5rem',
                                                                    fontSize: '0.95rem',
                                                                    backgroundColor: '#282c34',
                                                                    boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.2)'
                                                                }}
                                                                showLineNumbers
                                                            >
                                                                {content.content}
                                                            </SyntaxHighlighter>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default SubCourseDetails;