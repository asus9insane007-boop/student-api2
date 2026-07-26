const getCourses = (req, res) => {
  res.json({ message: "Get All Courses" });
};

const createCourse = (req, res) => {
  res.json({ message: "Create Course" });
};

module.exports = {
  getCourses,
  createCourse,
};