const express = require("express");
const path = require("path");
const newsController = require("../controllers/newsController");

const router = express.Router();
const INTRO_PAGE = path.join(__dirname, "..", "..", "frontend", "pages", "intro.html");

router.get("/", (req, res) => res.sendFile(INTRO_PAGE));

router.get("/news", newsController.index);
router.get("/news/:newsId", newsController.detail);

router.get("/search", newsController.search);

router.get("/create", newsController.showCreate);
router.post("/create", newsController.create);

router.get("/edit", newsController.showEdit);
router.post("/edit", newsController.edit);

router.get("/delete", newsController.remove);

module.exports = router;
