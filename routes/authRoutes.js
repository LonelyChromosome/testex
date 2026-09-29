const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/auth');

router.get('/login', authController.showLogin);
router.post('/login', authController.doLogin);

router.get('/dashboard', authMiddleware.requireLogin, authController.dashboard);

module.exports = router;
