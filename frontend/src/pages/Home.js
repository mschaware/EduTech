import React, { useState, useEffect } from "react";
import CourseList from "../components/CourseList";
import Navbar from "../components/Navbar";
import FeedbackForm from "./FeedbackForm";
import ChatBot from "./ChatBot.js"; // Ensure this file exists
import "./Home.css";

const Home = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("dark-mode");
    return savedTheme === "true";
  });

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    localStorage.setItem("dark-mode", darkMode);
    document.documentElement.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const [feedbackList, setFeedbackList] = useState([]);

  const addFeedback = (feedback) => {
    setFeedbackList([feedback, ...feedbackList]);
  };

  return (
    <div className={`homepage-container bg-gradient-to-r from-gray-500 via-purple-500 to-gray-900 ${darkMode ? "dark-mode" : ""}`}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
      {/* Fixed: Added meaningful text inside heading */}
      <h1 className="homepage-title">Welcome to EduTech - Master Programming!</h1>
      <CourseList darkMode={darkMode} />
      
      {/* Feedback Section */}
      <div className="feedback-section ">
        {/* Fixed: Added content to the feedback heading */}
        <h2 className="feedback-title">We'd love to hear your thoughts!</h2>
        <FeedbackForm addFeedback={addFeedback} />
        
        {/* Fixed: Ensured user feedback title is meaningful */}
        <h2 className="feedback-list-title">User Feedback</h2>
        <ul className="feedback-list">
          {feedbackList.map((feedback, index) => (
            <li key={index} className="feedback-item">
              <strong>{feedback.name}:</strong> {feedback.message}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Add the ChatBot component */}
      <ChatBot darkMode={darkMode} />
    </div>
  );
};

export default Home;
