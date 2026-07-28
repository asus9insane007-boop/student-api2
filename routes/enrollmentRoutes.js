const express = require("express");
const router = express.Router();

const {
  enrollStudent,
  getStudentEnrollments,
  getCourseStudents,
  removeEnrollment
} = require("../controllers/enrollmentController");

router.post("/", enrollStudent);

router.get(
  "/student/:studentId",
  getStudentEnrollments
);

router.get(
  "/course/:courseId",
  getCourseStudents
);

router.delete(
  "/:id",
  removeEnrollment
);

module.exports = router;