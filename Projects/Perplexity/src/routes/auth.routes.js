import { Router } from 'express';
import * as authController from '../controllers/auth.controller.js';
import { registerValidator } from '../validators/auth.validator.js';

const authRouter = Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 * @body {username, email, password}
 */
authRouter.post('/register', registerValidator, authController.register);

export default authRouter;
