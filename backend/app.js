const express = require("express");
const path = require("path");
const session = require("express-session");
const webRoutes = require("./routes/web");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "frontend", "views"));

app.use(express.urlencodedd({ extended: true }));
app.use(express.json());

app.use(session({
  secret: "webnc-lab-test",
  resave: false,
  saveUninitialized: false
}));

app.use("/", webRoutes);

app.use((req, res) => {
  res.status(404).send("404 - Not found");
});

module.exports = app;
