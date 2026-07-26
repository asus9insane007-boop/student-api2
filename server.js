const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/courses", require("./routes/courseRoutes"));
app.use("/api/categories", require("./routes/categoryRoutes"));
app.use("/api/enrollments", require("./routes/enrollmentRoutes"));

app.get("/", (req, res) => {
  res.send("Student Course Management API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});