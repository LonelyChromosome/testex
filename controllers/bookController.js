const bookModel = require('../models/bookModel');

exports.index = (req, res) => {
  const books = bookModel.getAll();
  res.render('books', { books });
};

exports.detailBook = (req, res) => {
  const id = Number(req.params.id);
  const book = bookModel.findBookById(id);

  if (!book) return res.status(404).send('Book not found');
  res.render('book-detail', { book });
};
