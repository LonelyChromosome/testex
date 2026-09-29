const users = [
  { id: 1, name: 'Dao' },
  { id: 2, name: 'Duong' }
];

exports.index = (req, res) => {
  res.render('user-list', { users });
};

exports.showAddForm = (req, res) => {
  res.render('add-user');
};

exports.add = (req, res) => {
  const name = req.body.name;

  users.push({
    id: users.length + 1,
    name
  });

  res.redirect('/users');
};
