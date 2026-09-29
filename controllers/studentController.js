const students = [
  { id: 1, name: 'Dao' },
  { id: 2, name: 'Duong' },
  { id: 3, name: 'Khanh' }
];

exports.listStudents = (req, res) => {
  res.render('students', { students });
};

exports.detail = (req, res) => {
  const id = Number(req.params.id);
  const student = students.find(item => item.id === id);

  if (!student) {
    return res.status(404).send('Student not found');
  }

  res.send(`${student.id} - ${student.name}`);
};
