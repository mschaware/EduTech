// import React from "react";
// import { Link } from "react-router-dom";

// const contests = [
//   { name: "Leetcode Contest", link: "https://leetcode.com/contest/" },
//   { name: "GFG Contest", link: "https://practice.geeksforgeeks.org/contest" },
//   { name: "CodeChef Contest", link: "https://www.codechef.com/contests" },
//   { name: "Codeforces Contest", link: "https://codeforces.com/contests" },
// ];

// const ContestPage = () => {
//   return (
//     <div className="w-screen min-h-screen flex flex-col items-center bg-gray-50 p-10">
//       <h1 className="text-5xl font-bold text-purple-600 mb-10">Coding Contests</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {contests.map((contest, index) => (
//           <div
//             key={index}
//             className="bg-purple-200 shadow-lg rounded-lg border border-purple-400 overflow-hidden 
//               transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-300 p-6 w-64 h-64 flex items-center justify-center"
//           >
//             <a
//               href={contest.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-2xl font-bold text-purple-700 hover:text-blue-600 hover:underline"
//             >
//               {contest.name}
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ContestPage;


import React from "react";
import { FaTrophy, FaCalendarAlt, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef, SiCodeforces } from "react-icons/si";

const contests = [
  { 
    name: "LeetCode Contest", 
    link: "https://leetcode.com/contest/",
    icon: <SiLeetcode className="text-orange-500 text-4xl" />,
    description: "Weekly coding challenges and competitions"
  },
  { 
    name: "GeeksforGeeks Contest", 
    link: "https://practice.geeksforgeeks.org/contest",
    icon: <SiGeeksforgeeks className="text-green-600 text-4xl" />,
    description: "Monthly coding contests with prizes"
  },
  { 
    name: "CodeChef Contest", 
    link: "https://www.codechef.com/contests",
    icon: <SiCodechef className="text-brown-500 text-4xl" />,
    description: "Regular contests with varying difficulty levels"
  },
  { 
    name: "Codeforces Contest", 
    link: "https://codeforces.com/contests",
    icon: <SiCodeforces className="text-blue-500 text-4xl" />,
    description: "Frequent competitive programming contests"
  },
];

const ContestPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-900 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FaTrophy className="text-yellow-400 text-4xl mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Coding Contests Hub
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover and participate in the best programming competitions from top platforms
          </p>
        </div>

        {/* Contest Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contests.map((contest, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700
                transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="mb-4 flex justify-between items-start">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    {contest.icon}
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 bg-purple-900/50 text-purple-300 rounded-full flex items-center">
                    <FaCalendarAlt className="mr-1" /> Ongoing
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{contest.name}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{contest.description}</p>
                
                <a
                  href={contest.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg
                    hover:from-purple-700 hover:to-pink-700 transition-all group"
                >
                  Participate
                  <FaExternalLinkAlt className="ml-2 text-sm opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
          <div className="flex items-start">
            <div className="bg-purple-600/20 p-3 rounded-lg mr-4">
              <FaCode className="text-purple-400 text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Why Participate in Coding Contests?</h3>
              <p className="text-gray-300">
                Coding contests help you improve problem-solving skills, learn new algorithms, 
                and get noticed by top tech companies. Regular participation can significantly 
                boost your programming abilities and career prospects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestPage;





