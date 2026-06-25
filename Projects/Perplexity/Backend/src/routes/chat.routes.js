import { Router } from 'express';
import * as chatController from '../controllers/chat.controller.js';
import { authUser } from '../middleware/auth.middleware.js';

const chatRouter = Router();

chatRouter.post('/message', authUser, chatController.sendMessage);

chatRouter.get('/', authUser, chatController.getChats);

chatRouter.get('/:chatId/messages', authUser, chatController.getMessages);

chatRouter.delete('/:chatId', authUser, chatController.deleteChat);

export default chatRouter;
