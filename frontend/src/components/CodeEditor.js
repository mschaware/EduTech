import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import axios from "axios";

// const API_KEY = "YOUR_GEMINI_API_KEY"; // Replace with your actual API key
const API_KEY = 'AIzaSyAG4MFYYkMzMMHQkmzeV3t5SaUfNX4gVZI';
const CodeEditor = () => {
  const [code, setCode] = useState("// Write your code here...");
  const [language, setLanguage] = useState("python");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const runCodeWithAI = async () => {
    setLoading(true);
    setOutput("AI is analyzing the code...");

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
      const aiOutput = data.candidates?.[0]?.content?.parts?.[0]?.text || "AI could not generate an output.";

      setOutput(aiOutput);
    } catch (error) {
      console.error("AI Execution Error:", error);
      setOutput("❌ Error in AI execution.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>AI-Powered Code Compiler</h2>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px" }}
      >
        <option value="python">Python</option>
        <option value="javascript">JavaScript</option>
        <option value="cpp">C++</option>
      </select>

      <Editor
        height="300px"
        language={language}
        value={code}
        onChange={(value) => setCode(value || "")}
        theme="vs-dark"
      />

      <button
        onClick={runCodeWithAI}
        style={{
          marginTop: "10px",
          padding: "10px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
        disabled={loading}
      >
        {loading ? "Running with AI..." : "Run with AI"}
      </button>

      <h3>Output:</h3>
      <pre
        style={{
          background: "#f4f4f4",
          padding: "10px",
          borderRadius: "5px",
          minHeight: "50px",
          textAlign: "left",
        }}
      >
        {output}
      </pre>
    </div>
  );
};

export default CodeEditor;
