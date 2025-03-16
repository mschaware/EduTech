const express = require("express");
require("dotenv").config();
const bodyParser = require('body-parser');
const dbConnect = require("./config/database");
const courseRoutes = require("./routes/course");
const cors = require('cors');
const authRoutes = require("./routes/auth");
const app = express();
const PORT = process.env.PORT || 8080;

// const progressRoutes = require("./routes/progressRoutes");
// app.use("/api/progress", progressRoutes); 

// Middleware
app.use(cors()); // Enable CORS for all routes
//app.use(bodyParser.json({ limit: '50mb' })); // Parse JSON request bodies with increased limit
//app.use(bodyParser.urlencoded({ limit: '50mb', extended: true })); // Parse URL-encoded data
app.use(bodyParser.json({ limit: "50mb" })); // Parse JSON bodies with a 50MB limit
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
// Routes
app.use("/api/v1", courseRoutes);
app.use("/api/auth", authRoutes);
// Test Route
app.get("/", (req, res) => {
  res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Connect to DB
dbConnect();

// Start Server
app.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});


