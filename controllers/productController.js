const productModel = require('../models/productModel');

exports.index = (req, res) => {
  const products = productModel.getAllProducts();
  res.render('product-list', { products });
};

exports.showAddForm = (req, res) => {
  res.render('add-product');
};

exports.create = (req, res) => {
  const name = req.body.productName;
  const price = Number(req.body.price);

  productModel.add(name, price);
  res.redirect('/products');
};

exports.editForm = (req, res) => {
  const id = Number(req.params.productId);
  const product = productModel.getById(id);

  if (!product) {
    return res.status(404).send('Product not found');
  }

  res.render('edit-product', { product });
};

exports.updateProduct = (req, res) => {
  const id = Number(req.params.id);
  const name = req.body.productName;
  const price = Number(req.body.price);

  productModel.updateProduct(id, name, price);
  res.redirect('/products');
};
