import React from "react";
import CourseList from "../components/CourseList";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center"><Navbar/></h1>
      <CourseList />
    </div>
  );
};

export default Home;
