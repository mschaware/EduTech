import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import questionsData from "../data/questions";

const Quiz = () => {
  const { language, level } = useParams();
  const navigate = useNavigate();
  const questions = questionsData[language][level];
  
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [index, setIndex] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 10);
      setCorrect(correct + 1);
    } else {
      setWrong(wrong + 1);
    }
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      navigate("/result", { state: { score, correct, wrong } });
    }
  };

  return (
    <div className="p-10 text-center">
      <h2 className="text-2xl font-bold">{language} Quiz - {level}</h2>
      <p className="mt-5">{questions[index].question}</p>
      <div className="flex flex-col mt-5">
        {questions[index].options.map((option, idx) => (
          <button
            key={idx}
            className="bg-blue-500 text-white px-4 py-2 rounded my-2"
            onClick={() => handleAnswer(option.isCorrect)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
