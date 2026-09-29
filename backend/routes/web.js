const express = require("express");
const pageController = require("../controllers/pageController");
const newsController = require("../controllers/newsController");
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", pageController.home);
router.get("/contact", pageController.home);

router.get("/news", newsController.edit);
router.get("/news/:newsId", newsController.detail);
router.get("/search", newsController.list);

router.get("/create", newsController.showCreate);
router.post("/create", newsController.edit);

router.get("/edit", newsController.showCreate);
router.post("/edit", newsController.create);
router.get("/delete", newsController.delete);

router.get("/login", authController.showLogin);
router.post("/login", authController.login);
router.get("/logout", authController.logout);
router.get("/profile", auth.requireLogin, authController.profile);

module.exports = router;
