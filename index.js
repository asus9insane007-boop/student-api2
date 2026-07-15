const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! My first server is running. MADE BY ADITYA ");
});

app.get("/about", (req, res) => {
  res.send("This is the About page. MADE BY ADITYA");
});

app.get("/contact", (req, res) => {
  res.send("This is the Contact page.MADE BY ADITYA");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});