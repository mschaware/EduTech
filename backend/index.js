// const express = require("express");
// require("dotenv").config();
// const bodyParser = require('body-parser');
// const dbConnect = require("./config/database");
// const courseRoutes = require("./routes/course");
// const cors = require('cors');
// const authRoutes = require("./routes/auth");
// const app = express();
// const PORT = process.env.PORT || 8080;

// // const progressRoutes = require("./routes/progressRoutes");
// // app.use("/api/progress", progressRoutes); 

// // Middleware
// app.use(cors()); // Enable CORS for all routes
// //app.use(bodyParser.json({ limit: '50mb' })); // Parse JSON request bodies with increased limit
// //app.use(bodyParser.urlencoded({ limit: '50mb', extended: true })); // Parse URL-encoded data

// app.use(express.json());
// app.use(bodyParser.json({ limit: "50mb" })); // Parse JSON bodies with a 50MB limit
// app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
// // Routes
// app.use("/api/v1", courseRoutes);
// app.use("/api/auth", authRoutes);
// // Test Route
// app.get("/", (req, res) => {
//   res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
// });


// // const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
// const GEMINI_API_KEY = 'AIzaSyAG4MFYYkMzMMHQkmzeV3t5SaUfNX4gVZI';

// const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;


// app.post("/execute", async (req, res) => {
//   const { code, language } = req.body;

//   try {
//     const prompt = `Execute the following ${language} code and return the output:\n\n${code}`;
//     const response = await axios.post(GEMINI_URL, {
//       contents: [{ parts: [{ text: prompt }] }]
//     });

//     const output = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "Error in execution";
//     res.json({ output });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Execution failed" });
//   }
// });











// // Error Handling Middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: "Something went wrong!" });
// });

// // Connect to DB
// dbConnect();

// // Start Server
// app.listen(PORT, () => {
//   console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
// });





const express = require("express");
require("dotenv").config();
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");
const dbConnect = require("./config/database");
const courseRoutes = require("./routes/course");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// Routes
app.use("/api/v1", courseRoutes);
app.use("/api/auth", authRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
});

// Load API Key from .env
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error("❌ ERROR: Google Gemini API Key is missing in .env file!");
  process.exit(1);
}

const GEMINI_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

app.post("/execute", async (req, res) => {
  const { code, language } = req.body;

  try {
    const prompt = `Execute the following ${language} code and return the output:\n\n${code}`;
    const response = await axios.post(GEMINI_URL, {
      contents: [{ parts: [{ text: prompt }] }],
    });

    const output = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "Error in execution";
    res.json({ output });
  } catch (error) {
    console.error("❌ Error executing code:", error.response?.data || error.message);
    res.status(500).json({ error: "Execution failed" });
  }
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Connect to Database
dbConnect();

// Start Server
app.listen(PORT, () => {
  console.log(`✅ SERVER IS RUNNING ON PORT ${PORT}`);
});




