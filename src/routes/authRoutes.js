const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authController');

router.get('/login', authControllers.login);
router.post('/login', authControllers.login_);
router.get('/register', authControllers.register);
router.post('/register', authControllers.register_);

module.exports = router;