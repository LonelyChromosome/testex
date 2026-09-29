const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.index);
router.get('/new', productController.showCreate);
router.post('/new', productController.create);
router.get('/edit/:id', productController.showEdit);
router.post('/edit/:id', productController.update);

module.exports = router;
