const express = require("express");
const pageController = require("../controllers/pageController");
const newsController = require("../controllers/newsController");
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", pageController.index);
router.get("/contact", pageController.about);

router.get("/news", newsController.index);
router.get("/news/:newsId", newsController.detail);
router.get("/search", newsController.find);

router.get("/create", newsController.showCreate);
router.post("/create", newsController.add);

router.get("/edit", newsController.showUpdate);
router.post("/edit", newsController.update);
router.get("/delete", newsController.delete);

router.get("/login", authController.showLogin);
router.post("/login", authController.doLogin);
router.get("/logout", authController.logout);
router.get("/profile", auth.requireLogin, authController.profile);

module.exports = router;
