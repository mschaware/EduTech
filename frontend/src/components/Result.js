// import { useLocation, useNavigate } from "react-router-dom";

// const Result = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   return (
//     <div className="p-10 text-center">
//       <h2 className="text-2xl font-bold">Quiz Results</h2>
//       <div className="mt-5 p-5 border rounded">
//         <p>Correct Answers: {state?.correct || 0}</p>
//         <p>Wrong Answers: {state?.wrong || 0}</p>
//         <p>Total Score: {state?.score || 0}</p>
//       </div>
//       <button className="mt-5 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => navigate("/")}>
//         Go to Home
//       </button>
//     </div>
//   );
// };

// export default Result;

import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Confetti from 'react-confetti';
import { FaTrophy, FaRedo, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const score = state?.score || 0;
  const correct = state?.correct || 0;
  const wrong = state?.wrong || 0;
  const totalQuestions = correct + wrong;
  const percentage = totalQuestions > 0 ? Math.round((correct / totalQuestions) * 100) : 0;

  const performanceLevel = () => {
    if (percentage >= 80) return { level: "Excellent", color: "from-emerald-400 to-teal-600", emoji: "🏆" };
    if (percentage >= 60) return { level: "Good", color: "from-blue-400 to-indigo-600", emoji: "👍" };
    if (percentage >= 40) return { level: "Average", color: "from-amber-400 to-orange-500", emoji: "😊" };
    return { level: "Keep Practicing", color: "from-rose-400 to-pink-600", emoji: "💪" };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-1000 to-gray-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
     
      {percentage >= 70 && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={300}
        />
      )}

      {/* Main result card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl p-8 max-w-md w-full relative overflow-hidden"
      >
        {/* Performance ribbon */}
        <div className={`absolute top-0 right-0 px-6 py-1 text-white font-bold ${performanceLevel().color} transform rotate-45 translate-x-8 -translate-y-2 shadow-lg`}>
          {performanceLevel().level} {performanceLevel().emoji}
        </div>

        <div className="text-center mb-6">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500 }}
          >
            <FaTrophy className="text-5xl mx-auto mb-4 text-yellow-400" />
          </motion.div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 mb-2">
            Quiz Completed!
          </h2>
          <p className="text-gray-300">Here's how you performed</p>
        </div>

        {/* Score circle */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className={`relative w-40 h-40 mx-auto mb-8 rounded-full ${performanceLevel().color} flex items-center justify-center shadow-lg`}
        >
          <div className="absolute inset-4 bg-gray-900 rounded-full flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-white">{percentage}%</span>
            <span className="text-xs text-gray-300">Score</span>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center bg-gray-700/50 p-4 rounded-lg border-l-4 border-emerald-500">
            <div className="flex items-center">
              <FaCheckCircle className="text-emerald-400 mr-2" />
              <span className="text-gray-200">Correct</span>
            </div>
            <span className="text-xl font-bold text-emerald-400">{correct}</span>
          </div>

          <div className="flex justify-between items-center bg-gray-700/50 p-4 rounded-lg border-l-4 border-rose-500">
            <div className="flex items-center">
              <FaTimesCircle className="text-rose-400 mr-2" />
              <span className="text-gray-200">Wrong</span>
            </div>
            <span className="text-xl font-bold text-rose-400">{wrong}</span>
          </div>

          <div className="flex justify-between items-center bg-gray-700/50 p-4 rounded-lg border-l-4 border-purple-500">
            <span className="text-gray-200">Total Score</span>
            <span className="text-2xl font-bold text-purple-400">{score}</span>
          </div>
        </div>

        {/* Action buttons */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6"
        >
          <button
            onClick={() => navigate("/")}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center"
          >
            <FaRedo className="mr-2" />
            Restart Quiz
          </button>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-purple-600 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-600 rounded-full filter blur-3xl opacity-20"></div>
    </div>
  );
};

export default Result;