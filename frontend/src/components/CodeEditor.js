// import React, { useState } from "react";
// import { Editor } from "@monaco-editor/react";
// import axios from "axios";

// // const API_KEY = "YOUR_GEMINI_API_KEY"; // Replace with your actual API key
// const API_KEY = 'AIzaSyAG4MFYYkMzMMHQkmzeV3t5SaUfNX4gVZI';
// const CodeEditor = () => {
//   const [code, setCode] = useState("// Write your code here...");
//   const [language, setLanguage] = useState("python");
//   const [output, setOutput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const runCodeWithAI = async () => {
//     setLoading(true);
//     setOutput("AI is analyzing the code...");

//     try {
//       const response = await fetch(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             contents: [
//               {
//                 parts: [
//                   {
//                     text: `Analyze and execute the following ${language} code and provide its expected output:\n\n${code}`,
//                   },
//                 ],
//               },
//             ],
//           }),
//         }
//       );

//       const data = await response.json();
//       const aiOutput = data.candidates?.[0]?.content?.parts?.[0]?.text || "AI could not generate an output.";

//       setOutput(aiOutput);
//     } catch (error) {
//       console.error("AI Execution Error:", error);
//       setOutput("❌ Error in AI execution.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: "20px", textAlign: "center" }}>
//       <h2>AI-Powered Code Compiler</h2>

//       <select
//         value={language}
//         onChange={(e) => setLanguage(e.target.value)}
//         style={{ marginBottom: "10px", padding: "5px" }}
//       >
//         <option value="python">Python</option>
//         <option value="javascript">JavaScript</option>
//         <option value="cpp">C++</option>
//       </select>

//       <Editor
//         height="300px"
//         language={language}
//         value={code}
//         onChange={(value) => setCode(value || "")}
//         theme="vs-dark"
//       />

//       <button
//         onClick={runCodeWithAI}
//         style={{
//           marginTop: "10px",
//           padding: "10px",
//           backgroundColor: "#007BFF",
//           color: "white",
//           border: "none",
//           cursor: "pointer",
//         }}
//         disabled={loading}
//       >
//         {loading ? "Running with AI..." : "Run with AI"}
//       </button>

//       <h3>Output:</h3>
//       <pre
//         style={{
//           background: "#f4f4f4",
//           padding: "10px",
//           borderRadius: "5px",
//           minHeight: "50px",
//           textAlign: "left",
//         }}
//       >
//         {output}
//       </pre>
//     </div>
//   );
// };

// export default CodeEditor;



import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { FaPlay, FaSpinner, FaCode, FaTerminal } from "react-icons/fa";
import { SiPython, SiJavascript, SiCplusplus } from "react-icons/si";

const API_KEY = 'AIzaSyAG4MFYYkMzMMHQkmzeV3t5SaUfNX4gVZI';

const CodeEditor = () => {
  const [code, setCode] = useState("# Write your Python code here\nprint('Hello, World!')");
  const [language, setLanguage] = useState("python");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const languageIcons = {
    python: <SiPython className="text-green-500" />,
    javascript: <SiJavascript className="text-yellow-400" />,
    cpp: <SiCplusplus className="text-blue-400" />
  };

  const runCodeWithAI = async () => {
    setLoading(true);
    setOutput("AI is analyzing your code... ⏳");

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Analyze and execute the following ${language} code and provide its expected output:\n\n${code}`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const aiOutput = data.candidates?.[0]?.content?.parts?.[0]?.text || "❌ AI could not generate an output.";
      setOutput(aiOutput);
    } catch (error) {
      console.error("AI Execution Error:", error);
      setOutput("❌ Error in AI execution. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-3">
            <FaCode className="text-2xl text-purple-500" />
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              AI Code Compiler
            </h1>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        {/* Language Selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Select Programming Language:
          </label>
          <div className="flex space-x-4">
            {Object.entries({
              python: "Python",
              javascript: "JavaScript",
              cpp: "C++"
            }).map(([lang, name]) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`flex items-center px-4 py-2 rounded-lg transition-all ${language === lang 
                  ? 'bg-purple-600 text-white shadow-md' 
                  : darkMode 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                <span className="mr-2 text-lg">{languageIcons[lang]}</span>
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Code Editor */}
        <div className={`rounded-xl overflow-hidden shadow-xl mb-6 ${darkMode ? 'border border-gray-700' : 'border border-gray-200'}`}>
          <div className={`px-4 py-2 flex justify-between items-center ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <div className="flex items-center">
              <span className="mr-2">{languageIcons[language]}</span>
              <span className="font-mono text-sm">
                {language === 'python' ? 'main.py' : 
                 language === 'javascript' ? 'script.js' : 'main.cpp'}
              </span>
            </div>
          </div>
          <Editor
            height="400px"
            language={language}
            value={code}
            onChange={(value) => setCode(value || "")}
            theme={darkMode ? "vs-dark" : "light"}
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              padding: { top: 10 },
              fontFamily: "Fira Code, monospace"
            }}
          />
        </div>

        {/* Run Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={runCodeWithAI}
            disabled={loading}
            className={`flex items-center px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-purple-500/30 ${loading ? 'opacity-80' : ''}`}
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin mr-2" />
                Analyzing with AI...
              </>
            ) : (
              <>
                <FaPlay className="mr-2" />
                Run with AI
              </>
            )}
          </button>
        </div>

        {/* Output Panel */}
        <div className={`rounded-xl overflow-hidden shadow-xl ${darkMode ? 'border border-gray-700' : 'border border-gray-200'}`}>
          <div className={`px-4 py-2 flex items-center ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <FaTerminal className="mr-2 text-green-500" />
            <span className="font-mono text-sm">Output</span>
          </div>
          <pre
            className={`p-4 font-mono text-sm overflow-x-auto ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            style={{ minHeight: "100px" }}
          >
            {output || <span className="text-gray-500">Your output will appear here...</span>}
          </pre>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Powered by Gemini AI • {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
