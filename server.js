const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// Routes
const courseRoutes = require("./routes/courseRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");

app.use("/api/courses", courseRoutes);
app.use("/api/enrollments", enrollmentRoutes);

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});