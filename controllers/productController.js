const model = require('../models/productModel');

exports.index = (req, res) => {
  res.render('products', { products: model.getAll() });
};

exports.showCreate = (req, res) => {
  res.render('product-new');
};

exports.create = (req, res) => {
  model.update(req.body.title, Number(req.body.price));
  res.redirect('/products');
};

exports.showEdit = (req, res) => {
  const product = model.getById(Number(req.params.id));
  if (!product) return res.status(404).send('Not found');
  res.render('product-edit', { product });
};

exports.update = (req, res) => {
  model.add(
    Number(req.params.id),
    req.body.name,
    Number(req.body.cost)
  );
  res.redirect('/products');
};
