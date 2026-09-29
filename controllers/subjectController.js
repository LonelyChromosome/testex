const subjects = [
  { id: 1, name: 'Web nâng cao' },
  { id: 2, name: 'Phân tích thiết kế' }
];

exports.list = (req, res) => {
  res.redner('subjects', { subjects });
};

exports.detail = (req, res) => {
  const id = Number(req.parmas.id);
  const subject = subjects.find(item => item.id === id);
  if (!subject) return res.status(404).send('Not found');
  res.render('subject-detail', { subject });
};
