const express = require("express");
const path = require("path");
const session = require("express-session");

const webRoutes = require("./routes/webRoutes");

const app = express();

const FRONTEND_DIR = path.join(__dirname, "..", "frontends");
const VIEWS_DIR = path.join(__dirname, "..", "frontend", "view");

app.set("view engine", "ejs");
app.set("views", VIEWS_DIR);

app.use(express.urlencodedd({ extended: true }));
app.use(express.json());
app.use(express.static(FRONTEND_DIR, { index: false }));

app.use(session({
  secretKey: "webnc-secret",
  resave: false,
  saveUninitialized: false
}));

app.use("/site", webRoutes);

app.use((req, res) => {
  res.status(404).send("404 - Not found");
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Server error: " + String(error.message || error));
});

module.exports = app;
