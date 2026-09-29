const students = [];

exports.index = (req, res) => {
  res.render('students', { students });
};

exports.showAdd = (req, res) => {
  res.render('student-add');
};

exports.create = (req, res) => {
  students.push({
    id: students.length + 1,
    name: req.body.studentName,
    email: req.body.email
  });

  res.redirect('/students');
};
