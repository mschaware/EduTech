import React from "react";
import { Link } from "react-router-dom";

const contests = [
  { name: "Leetcode Contest", link: "https://leetcode.com/contest/" },
  { name: "GFG Contest", link: "https://practice.geeksforgeeks.org/contest" },
  { name: "CodeChef Contest", link: "https://www.codechef.com/contests" },
  { name: "Codeforces Contest", link: "https://codeforces.com/contests" },
];

const ContestPage = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-gray-50 p-10">
      <h1 className="text-5xl font-bold text-purple-600 mb-10">Coding Contests</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {contests.map((contest, index) => (
          <div
            key={index}
            className="bg-purple-200 shadow-lg rounded-lg border border-purple-400 overflow-hidden 
              transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-300 p-6 w-64 h-64 flex items-center justify-center"
          >
            <a
              href={contest.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold text-purple-700 hover:text-blue-600 hover:underline"
            >
              {contest.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContestPage;
