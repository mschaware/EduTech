// import { useState } from "react";
// import "./FeedbackForm.css"; // Import the CSS file

// const FeedbackForm = ({ addFeedback, darkMode }) => { // Add darkMode prop
//   const [name, setName] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name && message) {
//       addFeedback({ name, message });
//       setName("");
//       setMessage("");
//     }
//   };

//   return (
//     <div className={`feedback-form-container ${darkMode ? "dark-mode" : ""}`}>
//       <h2 className="feedback-heading">Leave Your Feedback</h2>
//       <form onSubmit={handleSubmit} className="feedback-form">
//         <div className="form-group">
//           <label htmlFor="name">Your Name</label>
//           <input
//             type="text"
//             id="name"
//             placeholder="Enter your name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Your Feedback</label>
//           <textarea
//             id="message"
//             placeholder="Share your thoughts"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <button type="submit" className="submit-button">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FeedbackForm;



import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiUser, FiMessageSquare } from "react-icons/fi";

const FeedbackForm = ({ addFeedback }) => {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-1000 to-gray-800 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
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

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 z-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400">
          Share Your Feedback
        </h1>
        <p className="text-xl text-gray-300">
          We'd love to hear your thoughts about our platform
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl p-8 max-w-md w-full z-10"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-1"
          >
            <label htmlFor="name" className="flex items-center text-gray-300">
              <FiUser className="mr-2 text-purple-400" />
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-1"
          >
            <label htmlFor="message" className="flex items-center text-gray-300">
              <FiMessageSquare className="mr-2 text-purple-400" />
              Your Feedback
            </label>
            <textarea
              id="message"
              placeholder="Share your thoughts..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[120px]"
              required
            ></textarea>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-2"
          >
            <button
              type="submit"
              className="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/30"
            >
              <FiSend className="mr-2" />
              Submit Feedback
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default FeedbackForm;