const express = require("express");
const router = express.Router();

const {
  register,
  login,
} = require("../controllers/authController");

const auth = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);

router.get("/profile", auth, (req, res) => {
  res.json({
    message: "Protected Profile",
    user: req.user,
  });
});

module.exports = router;