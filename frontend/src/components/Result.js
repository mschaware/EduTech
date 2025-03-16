import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="p-10 text-center">
      <h2 className="text-2xl font-bold">Quiz Results</h2>
      <div className="mt-5 p-5 border rounded">
        <p>Correct Answers: {state?.correct || 0}</p>
        <p>Wrong Answers: {state?.wrong || 0}</p>
        <p>Total Score: {state?.score || 0}</p>
      </div>
      <button className="mt-5 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>
  );
};

export default Result;
