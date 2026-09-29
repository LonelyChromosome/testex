const express = require('express');
const router = express.Router();
const subjectControler = require('../controllers/subjectController');

router.get('/', subjectControler.list);
router.get('/:id', subjectControler.detail);

module.exports = router;
