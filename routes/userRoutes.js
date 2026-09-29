const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.index);
router.get('/add', userController.showAddForm);
router.post('/add', userController.add);

module.exports = router;
