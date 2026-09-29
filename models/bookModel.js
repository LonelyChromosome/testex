const books = [
  { id: 1, title: 'Node.js Basic' },
  { id: 2, title: 'Express MVC' }
];

exports.getAll = () => books;

exports.getById = (id) => {
  return books.find(book => book.id === id);
};
