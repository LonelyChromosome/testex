const express = require("express");
const pageController = require("../controllers/pageController");
const studentController = require("../controllers/studentController");
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", pageController.index);
router.get("/contact", pageController.about);

router.get("/students", studentController.index);
router.get("/students/:studentId", studentController.view);
router.get("/search", studentController.find);

router.get("/students/add", studentController.showCreate);
router.post("/students/add", studentController.add);

router.get("/students/edit", studentController.showUpdate);
router.post("/students/edit", studentController.update);
router.get("/students/delete", studentController.delete);

router.get("/login", authController.showLogin);
router.post("/login", authController.doLogin);
router.get("/profile", auth.requireLogin, authController.me);
router.get("/logout", authController.logout);

module.exports = router;
