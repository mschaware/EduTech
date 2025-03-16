
import { useNavigate } from "react-router-dom";

const QuizHome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold">Welcome to the Quiz App</h1>
      <button 
        className="mt-5 bg-blue-500 text-white px-4 py-2 rounded" 
        onClick={() => navigate("/quizselect")}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default QuizHome;
