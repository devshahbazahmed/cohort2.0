const { Router } = require('express');
const authController = require('../controllers/auth.controller.js');
const { authUser } = require('../middleware/auth.middleware.js');

const router = Router();

router.post('/register', authController.registerUser);

router.post('/login', authController.loginUser);

router.get('/get-me', authUser, authController.getMe);

router.post('/logout', authController.logoutUser);

module.exports = router;
