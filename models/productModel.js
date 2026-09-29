let products = [
  { id: 1, name: 'Keyboard', price: 500000 },
  { id: 2, name: 'Mouse', price: 250000 }
];

exports.getAll = () => {
  return products;
};

exports.getById = (id) => {
  return products.find(product => product.id === id);
};

exports.add = (name, price) => {
  products.push({
    id: products.length + 1,
    name,
    price
  });
};

exports.update = (id, name, price) => {
  const product = products.find(item => item.id === id);
  if (!product) return false;

  product.name = name;
  product.price = price;
  return true;
};
