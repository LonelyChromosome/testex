const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.index);
router.get('/add', productController.showAddForm);
router.post('/create', productController.create);

router.get('/edit/:id', productController.editForm);
router.post('/edit/:id', productController.updateProduct);

module.exports = router;
