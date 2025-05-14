
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import questionsData from "../data/questions";
import Confetti from 'react-confetti';
import { motion, AnimatePresence } from "framer-motion";

const Quiz = () => {
  const { language, level } = useParams();
  const navigate = useNavigate();
  const questions = questionsData[language][level];
  
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [timer, setTimer] = useState(15);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Handle window resize for confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Timer logic
  // useEffect(() => {
  //   const countdown = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
  //   if (timer === 0) {
  //     handleAnswer(false);
  //   }
  //   return () => clearInterval(countdown);
  // }, [timer]);
  useEffect(() => {
  const countdown = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
  if (timer === 0) {
    handleAnswer(false);
  }
  return () => clearInterval(countdown);
}, [timer, handleAnswer]); // ✅ Add handleAnswer to dependencies


  const handleAnswer = (isCorrect) => {
    setSelectedOption(null);
    setShowFeedback(true);
    setIsCorrectAnswer(isCorrect);

    if (isCorrect) {
      setScore(score + 10);
      setCorrect(correct + 1);
    } else {
      setWrong(wrong + 1);
    }

    setTimeout(() => {
      setShowFeedback(false);
      setTimer(15);
      
      if (index + 1 < questions.length) {
        setIndex(index + 1);
      } else {
        navigate("/result", { state: { score, correct: isCorrect ? correct + 1 : correct, wrong } });
      }
    }, 1500);
  };

  const getLevelColor = () => {
    switch(level.toLowerCase()) {
      case 'easy': return 'bg-emerald-500';
      case 'medium': return 'bg-amber-500';
      case 'hard': return 'bg--600';
      default: return 'bg-purple-500';
    }
  };

  const getLevelTextColor = () => {
    switch(level.toLowerCase()) {
      case 'easy': return 'text-emerald-400';
      case 'medium': return 'text-amber-400';
      case 'hard': return 'text-rose-400';
      default: return 'text-purple-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-1000 to-gray-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Confetti for correct answers */}
      <AnimatePresence>
        {showFeedback && isCorrectAnswer && (
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={300}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* Progress bar */}
      <div className="w-full max-w-4xl mb-6 bg-gray-700 rounded-full h-2.5">
        <motion.div 
          className={`h-2.5 rounded-full ${getLevelColor()}`}
          initial={{ width: 0 }}
          animate={{ width: `${((index + 1) / questions.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </div>

      {/* Quiz card */}
      <motion.div 
        className="relative w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Timer circle */}
        <div className="absolute -top-5 -right-5 z-10">
          <motion.div 
            className="relative w-16 h-16"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#4B5563"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke={timer > 5 ? "#A78BFA" : "#EF4444"}
                strokeWidth="3"
                strokeDasharray={`${(timer / 15) * 100}, 100`}
                style={{ transition: 'stroke-dasharray 1s linear' }}
              />
            </svg>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
              {timer}
            </span>
          </motion.div>
        </div>

        {/* Main quiz content */}
        <div className={`bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border-t-4 ${getLevelColor()} transition-all duration-300`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">
              <span className={`${getLevelTextColor()}`}>{language}</span> Quiz
            </h2>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getLevelColor()} text-white shadow-md`}>
              {level}
            </span>
          </div>

          <div className="mb-8">
            <p className="text-gray-300 mb-2">Question {index + 1} of {questions.length}</p>
            <motion.h3 
              className="text-xl font-semibold text-white"
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {questions[index].question}
            </motion.h3>
          </div>

          <div className="space-y-4 mb-6">
            {questions[index].options.map((option, idx) => (
              <motion.button
                key={idx}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                  selectedOption === idx
                    ? option.isCorrect
                      ? 'bg-emerald-600 text-white'
                      : 'bg-rose-600 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                } font-medium shadow-md`}
                onClick={() => {
                  setSelectedOption(idx);
                  handleAnswer(option.isCorrect);
                }}
                disabled={showFeedback}
                whileHover={{ scale: selectedOption === null ? 1.02 : 1 }}
                whileTap={{ scale: 0.98 }}
              >
                {option.text}
              </motion.button>
            ))}
          </div>

          {/* Feedback overlay */}
          <AnimatePresence>
            {showFeedback && (
              <motion.div 
                className={`absolute inset-0 flex items-center justify-center rounded-2xl bg-opacity-90 ${
                  isCorrectAnswer ? 'bg-emerald-600' : 'bg-rose-600'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.span 
                  className="text-white text-4xl font-bold"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                >
                  {isCorrectAnswer ? 'Correct! 🎉' : 'Wrong! 😢'}
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Score indicator */}
      <motion.div 
        className="mt-8 bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex space-x-8">
          <div className="text-center">
            <p className="text-gray-400">Score</p>
            <p className="text-2xl font-bold text-purple-400">{score}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400">Correct</p>
            <p className="text-2xl font-bold text-emerald-400">{correct}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400">Wrong</p>
            <p className="text-2xl font-bold text-rose-400">{wrong}</p>
          </div>
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-purple-600 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-600 rounded-full filter blur-3xl opacity-20"></div>
    </div>
  );
};

export default Quiz;