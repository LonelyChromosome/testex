const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.listBooks);
router.get('/:bookId', bookController.detailBook);

module.exports = router;
