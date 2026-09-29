let products = [
  { id: 1, name: 'CPU', price: 500 },
  { id: 2, name: 'RAM', price: 200 }
];

exports.getAll = () => products;
exports.getById = id => products.find(p => p.id === id);

exports.add = (name, price) => {
  products.push({ id: products.length + 1, name, price });
};

exports.update = (id, name, price) => {
  const p = products.find(item => item.id === id);
  if (!p) return false;
  p.name = name;
  p.price = price;
  return true;
};
