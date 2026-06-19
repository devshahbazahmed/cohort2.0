import { Router } from 'express';
import * as authController from '../controllers/auth.controller.js';
import {
  loginValidator,
  registerValidator,
} from '../validators/auth.validator.js';
import { authUser } from '../middleware/auth.middleware.js';

const authRouter = Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 * @body { username, email, password }
 */
authRouter.post('/register', registerValidator, authController.register);

/**
 * @route POST /api/auth/login
 * @desc Login user and return JWT token
 * @access Public
 * @body { email, password }
 */

authRouter.post('/login', loginValidator, authController.login);

/**
 * @route GET /api/auth/get-me
 * @desc Get current user's login details
 * @access Private
 */

authRouter.get('/get-me', authUser, authController.getMe);

/**
 * @route GET /api/auth/verify-email
 * @desc Verify user's email address
 * @access Public
 * @query { token }
 */
authRouter.get('/verify-email', authController.verifyEmail);

export default authRouter;
