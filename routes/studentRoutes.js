const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/', studentController.list);
router.get('/:id', studentController.detail);

module.exports = router;
