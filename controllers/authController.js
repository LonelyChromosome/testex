const userModel = require('../models/userModel');

exports.showLogin = (req, res) => res.render('login');

exports.login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.pass;

  const user = await userModel.findByCredentials(username, password);
  if (!user) return res.status(401).send('Login failed');

  req.session.currentUser = user;
  res.redirect('/profile');
};

exports.profile = (req, res) => {
  res.render('profile', { user: req.session.user });
};
