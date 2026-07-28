const Enrollment = require("../models/Enrollment");

// Enroll Student
exports.enrollStudent = async (req, res) => {
  try {
    const enrollment = await Enrollment.create(req.body);

    res.status(201).json({
      success: true,
      data: enrollment
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Student Enrollments
exports.getStudentEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({
      student: req.params.studentId
    })
      .populate("student", "name email")
      .populate({
        path: "course",
        populate: {
          path: "category",
          select: "name"
        }
      });

    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Course Students
exports.getCourseStudents = async (req, res) => {
  try {
    const students = await Enrollment.find({
      course: req.params.courseId
    })
      .populate("student", "name email")
      .populate({
        path: "course",
        populate: {
          path: "category",
          select: "name"
        }
      });

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove Enrollment
exports.removeEnrollment = async (req, res) => {
  try {
    await Enrollment.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Enrollment removed"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};