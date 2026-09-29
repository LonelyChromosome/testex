const express = require("express");
const path = require("path");

const webRoutes = require("./routes/webRoutes");

const app = express();

const FRONTEND_DIR = path.join(__dirname, "..", "frontend");
const VIEWS_DIR = path.join(FRONTEND_DIR, "views");

app.set("view engine", "ejs");
app.set("views", VIEWS_DIR);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(FRONTEND_DIR, { index: false }));

app.use("/", webRoutes);

app.use((req, res) => {
  res.status(404).type("text/plain").send("404 - Khong tim thay trang");
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Loi xu ly: " + String(error.message || error));
});

module.exports = app;
