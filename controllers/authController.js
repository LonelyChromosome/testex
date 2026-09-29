const userModel = require('../models/userModel');

exports.showLogin = (req, res) => {
  res.render('login');
};

exports.doLogin = async (req, res) => {
  try {
    const username = req.body.userName;
    const password = req.body.password;

    const user = await userModel.findByCredentials(username, password);

    if (!user) {
      return res.status(401).send('Sai tài khoản hoặc mật khẩu');
    }

    req.session.account = user;
    res.redirect('/dashboard');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.dashboard = (req, res) => {
  res.render('dashboard', {
    user: req.session.account
  });
};
