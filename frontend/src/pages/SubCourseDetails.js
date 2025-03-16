
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


