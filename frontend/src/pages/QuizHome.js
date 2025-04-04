
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const QuizHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400">
         Welcome to Quiz
        </h1>
        <p className="text-xl text-gray-300">
          Test your programming knowledge like never before
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 max-w-md w-full"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Welcome!</h2>
          <p className="text-gray-300">
            Ready to challenge yourself with our programming quizzes?
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-700/50 p-4 rounded-lg border-l-4 border-purple-500">
            <h3 className="font-semibold text-white mb-1">Multiple Languages</h3>
            <p className="text-sm text-gray-300">
              JavaScript, Python, Java, C++ and more
            </p>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-semibold text-white mb-1">Difficulty Levels</h3>
            <p className="text-sm text-gray-300">
              Easy, Medium, and Hard challenges
            </p>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg border-l-4 border-pink-500">
            <h3 className="font-semibold text-white mb-1">Track Progress</h3>
            <p className="text-sm text-gray-300">
              Monitor your scores and improvement
            </p>
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8"
        >
          <button
            onClick={() => navigate("/quizselect")}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          >
            Get Started
          </button>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-400 text-sm mt-8 text-center"
      >
        
      </motion.p>
    </div>
  );
};

export default QuizHome;