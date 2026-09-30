const userService = require("../services/userService");

function showLogin(req, res) {
  res.render("login");
}

async function login(req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await userService.authenticate(username, password);

    if (!user) {
      return res.status(401).send("Sai tài khoản hoặc mật khẩu");
    }

    req.session.account = user;
    res.redirect("/profile");
  } catch (error) {
    next(error);
  }
}

function profile(req, res) {
  res.render("profile", {
    user: req.session.account
  });
}

function logout(req, res, next) {
  req.session.destroy((error) => {
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
