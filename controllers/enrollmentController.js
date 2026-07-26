const enrollCourse = (req, res) => {
  res.json({ message: "Enroll in Course" });
};

const getEnrollments = (req, res) => {
  res.json({ message: "Get Enrollments" });
};

module.exports = {
  enrollCourse,
  getEnrollments,
};