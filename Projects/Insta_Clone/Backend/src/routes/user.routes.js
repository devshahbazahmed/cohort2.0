const express = require('express');
const userController = require('../controllers/user.controller.js');
const identifyUser = require('../middleware/auth.middleware.js');

const userRouter = express.Router();

/**
 * @route POST /api/users/follow/:userId
 * @description Follow a user
 * @access Private
 */
userRouter.post(
  '/follow/:username',
  identifyUser,
  userController.followController
);

/**
 * @route POST /api/users/unfollow/:userId
 * @description Unfollow a user
 * @access Private
 */
userRouter.post(
  '/unfollow/:username',
  identifyUser,
  userController.unfollowUserController
);

module.exports = userRouter;
