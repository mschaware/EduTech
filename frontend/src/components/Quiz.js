import { useState, useEffect, useCallback } from "react";
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

  const handleAnswer = useCallback((isCorrect) => {
  setSelectedOption(null);
  setShowFeedback(true);
  setIsCorrectAnswer(isCorrect);

  if (isCorrect) {
    setScore(prevScore => prevScore + 10);
    setCorrect(prevCorrect => prevCorrect + 1);
  } else {
    setWrong(prevWrong => prevWrong + 1);
  }

  setTimeout(() => {
    setShowFeedback(false);
    setTimer(15);
    
    if (index + 1 < questions.length) {
      setIndex(prevIndex => prevIndex + 1);
    } else {
      navigate("/result", { state: { score, correct: isCorrect ? correct + 1 : correct, wrong } });
    }
  }, 1500);
}, [score, correct, wrong, navigate, index, questions]); // ✅ Added missing dependencies

  // Wrap `handleAnswer` in useCallback to prevent re-renders
  // const handleAnswer = useCallback((isCorrect) => {
  //   setSelectedOption(null);
  //   setShowFeedback(true);
  //   setIsCorrectAnswer(isCorrect);

  //   if (isCorrect) {
  //     setScore(prevScore => prevScore + 10);
  //     setCorrect(prevCorrect => prevCorrect + 1);
  //   } else {
  //     setWrong(prevWrong => prevWrong + 1);
  //   }

  //   setTimeout(() => {
  //     setShowFeedback(false);
  //     setTimer(15);
      
  //     if (index + 1 < questions.length) {
  //       setIndex(prevIndex => prevIndex + 1);
  //     } else {
  //       navigate("/result", { state: { score, correct: isCorrect ? correct + 1 : correct, wrong } });
  //     }
  //   }, 1500);
  // }, [navigate, index, questions]);

  // Timer logic
  useEffect(() => {
    const countdown = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
    if (timer === 0) {
      handleAnswer(false);
    }
    return () => clearInterval(countdown);
  }, [timer, handleAnswer]); // ✅ handleAnswer added as a dependency

  const getLevelColor = () => {
    switch(level.toLowerCase()) {
      case 'easy': return 'bg-emerald-500';
      case 'medium': return 'bg-amber-500';
      case 'hard': return 'bg-rose-600'; // ✅ Fixed incorrect Tailwind class
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-500 to-gray-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Confetti for correct answers */}
      <AnimatePresence>
        {showFeedback && isCorrectAnswer && (
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={300}
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
        {/* Main quiz content */}
        <div className={`bg-gray-800/90 p-8 rounded-2xl shadow-2xl border-t-4 ${getLevelColor()} transition-all duration-300`}>
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
              >
                {option.text}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Quiz;
