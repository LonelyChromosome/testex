const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');
const auth = require('../middleware/auth');

router.get('/login', controller.showLogin);
router.post('/login', controller.login);
router.get('/profile', auth.requireLogin, controller.profile);

module.exports = router;
