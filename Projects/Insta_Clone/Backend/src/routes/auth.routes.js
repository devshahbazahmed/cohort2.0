const express = require('express');
const authController = require('../controllers/auth.controller.js');
const identifyUser = require('../middleware/auth.middleware.js');

const authRouter = express.Router();

/**
 * @route POST /api/auth/register
 * @description Register a user
 * @access Public
 */
authRouter.post('/register', authController.registerController);

/**
 * @route POST /api/auth/login
 * @description Login a user
 * @access Public
 */
authRouter.post('/login', authController.loginController);

/**
 * @route GET /api/auth/get-me
 * @description Get currently logged in user's current information
 * @access Private
 */

authRouter.get('/get-me', identifyUser, authController.getUserController);

module.exports = authRouter;
