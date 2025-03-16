// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// //import Navbar from './components/Navbar';
// import SubCourseDetails from "./pages/SubCourseDetails";
// import Login from './pages/Login';
// import Signup from './pages/Signup';




// import QuizHome from './pages/QuizHome.js'
// import QuizSelection from "./components/QuizSelection";
// import DifficultySelection from "./components/DifficultySelection";
// import Result from "./components/Result";
// import Quiz from "./components/Quiz";






// //import CourseProgress  from "./components/CourseProgress";
// const App = () => {
// //  const userId="12345";
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/subcourse/:courseId/:subCourseId" element={<SubCourseDetails />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/quiz" element={<QuizHome />} />
//         <Route path="/quizselect" element={<QuizSelection />} />
//         <Route path="/quiz/:language" element={<DifficultySelection />} />
//         <Route path="/quiz/:language/:level" element={<Quiz />} />
//         <Route path="/result" element={<Result />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import CourseProgress from "./components/CourseProgress";

// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<CourseProgress userId="12345" />} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SubCourseDetails from "./pages/SubCourseDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import QuizHome from "./pages/QuizHome";
import QuizSelection from "./components/QuizSelection";
import DifficultySelection from "./components/DifficultySelection";
import Result from "./components/Result";
import Quiz from "./components/Quiz";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* Protected Routes (Require Authentication) */}
                <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path="/subcourse/:courseId/:subCourseId" element={<ProtectedRoute><SubCourseDetails /></ProtectedRoute>} />
                <Route path="/quiz" element={<ProtectedRoute><QuizHome /></ProtectedRoute>} />
                <Route path="/quizselect" element={<ProtectedRoute><QuizSelection /></ProtectedRoute>} />
                <Route path="/quiz/:language" element={<ProtectedRoute><DifficultySelection /></ProtectedRoute>} />
                <Route path="/quiz/:language/:level" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
                <Route path="/result" element={<ProtectedRoute><Result /></ProtectedRoute>} />
            </Routes>
        </Router>
    );
};

export default App;
