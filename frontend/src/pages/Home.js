import React, { useState } from "react";
import CourseList from "../components/CourseList";
import Navbar from "../components/Navbar";
import FeedbackForm from "./FeedbackForm";
import "./Home.css"; // Import the styled CSS file

const Home = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  const addFeedback = (feedback) => {
    setFeedbackList([feedback, ...feedbackList]); // Add new feedback at the top
  };

  return (
    <div className="homepage-container">
      <Navbar />
      <h1 className="homepage-title">Welcome to Our Website</h1>
      <CourseList />

      {/* Feedback Section at the Bottom */}
      <div className="feedback-section">
        <h2 className="feedback-title">Leave Your Feedback</h2>
        <FeedbackForm addFeedback={addFeedback} />
        <h2 className="feedback-list-title">User Feedback</h2>
        <ul className="feedback-list">
          {feedbackList.map((feedback, index) => (
            <li key={index} className="feedback-item">
              <strong>{feedback.name}:</strong> {feedback.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
