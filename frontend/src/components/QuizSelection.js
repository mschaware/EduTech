// import { useNavigate } from "react-router-dom";

// const programmingLanguages = ["JavaScript", "Python", "Java", "C++", "Go"];

// const QuizSelection = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="grid grid-cols-2 gap-4 p-10">
//       {programmingLanguages.map((lang) => (
//         <div
//           key={lang}
//           className="p-5 text-center border rounded cursor-pointer hover:bg-gray-200"
//           onClick={() => navigate(`/quiz/${lang.toLowerCase()}`)}
//         >
//           <h2 className="text-xl font-bold">{lang}</h2>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default QuizSelection;

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const programmingLanguages = [
  { name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
  { name: "Python", color: "from-blue-400 to-blue-600" },
  { name: "Java", color: "from-red-500 to-red-700" },
  { name: "C++", color: "from-blue-500 to-blue-800" },
  { name: "Go", color: "from-cyan-400 to-cyan-600" },
 
];

const QuizSelection = () => {
  const navigate = useNavigate();

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4 relative overflow-hidden">

      <div className="absolute w-full h-full overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute  opacity-10"
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
        className="text-center mb-12 z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400">
          Choose Your Language
        </h1>
        <p className="text-xl text-gray-300">
          Test your programming knowledge in different languages
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full z-10"
      >
        {programmingLanguages.map((lang) => (
          <motion.div
            key={lang.name}
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`bg-gradient-to-br ${lang.color} p-0.5 rounded-xl shadow-2xl cursor-pointer transition-all duration-300 hover:shadow-lg`}
            onClick={() => navigate(`/quiz/${lang.name.toLowerCase()}`)}
          >
            <div className="bg-gray-900 h-full rounded-xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:bg-opacity-0 hover:text-white">
              <h2 className="text-2xl font-bold text-center mb-2">{lang.name}</h2>
              <p className="text-gray-300 text-center text-sm">
                {lang.name === "JavaScript" && "The language of the web"}
                {lang.name === "Python" && "Simple yet powerful"}
                {lang.name === "Java" && "Write once, run anywhere"}
                {lang.name === "C++" && "High-performance computing"}
                {lang.name === "Go" && "Efficient and scalable"}
                {lang.name === "Ruby" && "Developer happiness focused"}
              </p>
              <div className="mt-4 px-4 py-2 bg-black bg-opacity-30 rounded-full text-xs font-semibold">
                Click to start
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-gray-400 text-sm z-10"
      >
        Select a programming language to begin your quiz
      </motion.div>
    </div>
  );
};

export default QuizSelection;