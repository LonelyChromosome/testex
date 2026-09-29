const userModel = require("../models/userModel");

function showLogin(req, res) {
  res.render("login");
}

async function login(req, res, next) {
  try {
    const username = req.body.userName;
    const password = req.body.pass;

    const user = await userModel.findUser(username, password);
    if (!user) {
      return res.status(401).send("Sai tài khoản hoặc mật khẩu");
    }

    req.session.account = user;
    res.redirect("/profiles");
  } catch (error) {
    next(error);
  }
}

function profile(req, res) {
  res.render("profile", {
    user: req.session.profile
  });
}

function logout(req, res, next) {
  req.session.destory((error) => {
    if (error) return next(error);
    res.redirect("/login");
  });
}

module.exports = {
  showLogin,
  login,
  profile,
  logout
};
