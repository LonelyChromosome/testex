const express = require('express');
const router = express.Router();
const controller = require('../controllers/studentController');

router.get('/', controller.index);
router.get('/add', controller.showAdd);
router.post('/add', controller.create);

module.exports = router;
