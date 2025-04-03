import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Assuming Navbar is in components folder
import Home from "./pages/Home";
import SubCourseDetails from "./pages/SubCourseDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import QuizHome from "./pages/QuizHome.js";
import QuizSelection from "./components/QuizSelection";
import DifficultySelection from "./components/DifficultySelection";
import Result from "./components/Result";
import Quiz from "./components/Quiz";
import ProtectedRoute from "./components/ProtectedRoute";
import ContestPage from "./pages/ContestPage";
import CommunityPage from "./components/CommunityPage"; // Import the new CommunityPage
import CodeEditor from "./components/CodeEditor.js";



const App = () => {
  const [darkMode, setDarkMode] = useState(false); // State for theme toggling

  const toggleTheme = () => setDarkMode(!darkMode); // Function to toggle theme

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        {/* Add Navbar at the top level */}
        {/* <Navbar darkMode={darkMode} toggleTheme={toggleTheme} /> */}
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contestpage" element={<ContestPage />} />
         
          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/subcourse/:courseId/:subCourseId"
            element={
              <ProtectedRoute>
                <SubCourseDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quiz"
            element={
              <ProtectedRoute>
                <QuizHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/compiler"
            element={
              <ProtectedRoute>
                <CodeEditor />
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/quizselect"
            element={
              <ProtectedRoute>
                <QuizSelection />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quiz/:language"
            element={
              <ProtectedRoute>
                <DifficultySelection />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quiz/:language/:level"
            element={
              <ProtectedRoute>
                <Quiz />
              </ProtectedRoute>
            }
          />
          <Route
            path="/result"
            element={
              <ProtectedRoute>
                <Result />
              </ProtectedRoute>
            }
          />
          {/* Add CommunityPage as a Protected Route */}
          <Route
            path="/community"
            element={
              <ProtectedRoute>
                <CommunityPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;