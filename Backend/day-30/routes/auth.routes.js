import { Router } from 'express';
import * as authController from '../controllers/auth.controller.js';
import { registerValidator } from '../validation/auth.validator.js';

const authRouter = Router();

authRouter.post('/register', registerValidator, authController.registerUser);

export default authRouter;
