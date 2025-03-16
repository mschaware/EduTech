import { useNavigate } from "react-router-dom";

const programmingLanguages = ["JavaScript", "Python", "Java", "C++", "Go"];

const QuizSelection = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 gap-4 p-10">
      {programmingLanguages.map((lang) => (
        <div
          key={lang}
          className="p-5 text-center border rounded cursor-pointer hover:bg-gray-200"
          onClick={() => navigate(`/quiz/${lang.toLowerCase()}`)}
        >
          <h2 className="text-xl font-bold">{lang}</h2>
        </div>
      ))}
    </div>
  );
};

export default QuizSelection;
