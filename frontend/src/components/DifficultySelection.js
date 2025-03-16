import { useNavigate, useParams } from "react-router-dom";

const difficultyLevels = ["Easy", "Medium", "Hard"];

const DifficultySelection = () => {
  const navigate = useNavigate();
  const { language } = useParams();

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold">Select Difficulty for {language}</h2>
      <div className="flex gap-4 mt-5">
        {difficultyLevels.map((level) => (
          <button
            key={level}
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => navigate(`/quiz/${language}/${level.toLowerCase()}`)}
          >
            {level}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DifficultySelection;
