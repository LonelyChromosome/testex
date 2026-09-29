const express = require("express");
const pageController = require("../controllers/pageController");
const studentController = require("../controllers/studentController");
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", pageController.home);
router.get("/contact", pageController.contact);

router.get("/students", studentController.list);
router.get("/students/:studentId", studentController.detail);
router.get("/search", studentController.search);

router.get("/students/add", studentController.showCreate);
router.post("/students/add", studentController.create);

router.get("/students/edit", studentController.showEdit);
router.post("/students/edit", studentController.edit);
router.get("/students/delete", studentController.remove);

router.get("/login", authController.showLogin);
router.post("/login", authController.login);
router.get("/profile", auth.requireLogin, authController.me);
router.get("/logout", authController.logout);

module.exports = router;
