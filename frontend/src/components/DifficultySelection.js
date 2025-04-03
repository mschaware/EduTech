import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const difficultyLevels = [
  { name: "Easy", color: "from-gray-400 to-green-600", description: "Perfect for beginners, covering fundamental concepts" },
  { name: "Medium", color: "from-gray-400 to-yellow-600", description: "Balanced challenges to test your understanding" },
  { name: "Hard", color: "from-gray-500 to-red-700", description: "Expert-level problems for seasoned coders" }
];

const DifficultySelection = () => {
  const navigate = useNavigate();
  const { language } = useParams();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400">
          Select Your Challenge
        </h1>
        <p className="text-xl text-gray-300">
          Choose difficulty level for {language} quiz
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full"
      >
        {difficultyLevels.map((level) => (
          <motion.div
            key={level.name}
            variants={item}
            className="group perspective-1000 h-64"
          >
            <div className="relative w-full h-full transition-all duration-500 preserve-3d group-hover:rotate-y-180">
              {/* Front of card */}
              <div className="absolute backface-hidden w-full h-full bg-gray-800 rounded-xl shadow-lg border border-gray-700 flex flex-col items-center justify-center p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{level.name}</h3>
                <p className="text-gray-300 text-center mb-4">
                  {level.description}
                </p>
                <div className="w-12 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
              </div>

              {/* Back of card */}
              <div className={`absolute w-full h-full rounded-xl backface-hidden rotate-y-180 bg-gradient-to-br ${level.color} p-1`}>
                <div className="bg-gray-900 w-full h-full rounded-lg flex flex-col items-center justify-center p-4 transition-all duration-300 hover:bg-opacity-0">
                  <h3 className="text-2xl font-bold text-white mb-4">{level.name} Mode</h3>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate(`/quiz/${language}/${level.name.toLowerCase()}`)}
                    className={`px-8 py-3 rounded-lg font-bold text-white shadow-lg ${
                      level.name === "Easy" ? "bg-green-600 hover:bg-green-700" :
                      level.name === "Medium" ? "bg-yellow-600 hover:bg-yellow-700" :
                      "bg-red-600 hover:bg-red-700"
                    }`}
                  >
                    Begin {level.name} Quiz
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
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

export default DifficultySelection;