const express = require("express");
const studentController = require("../controllers/studentController");
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/students", studentController.index);
router.get("/students/:studentId", studentController.detail);
router.get("/search", studentController.search);

router.get("/students/add", studentController.showCreate);
router.post("/students/add", studentController.create);

router.get("/login", authController.showLogin);
router.post("/login", authController.login);
router.get("/profile", auth.requireLogin, authController.profile);
router.get("/logout", authController.logout);

module.exports = router;
