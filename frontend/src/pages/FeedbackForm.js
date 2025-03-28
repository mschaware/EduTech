import { useState } from "react";
import "./FeedbackForm.css"; // Import the CSS file

const FeedbackForm = ({ addFeedback, darkMode }) => { // Add darkMode prop
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && message) {
      addFeedback({ name, message });
      setName("");
      setMessage("");
    }
  };

  return (
    <div className={`feedback-form-container ${darkMode ? "dark-mode" : ""}`}>
      <h2 className="feedback-heading">Leave Your Feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Feedback</label>
          <textarea
            id="message"
            placeholder="Share your thoughts"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;