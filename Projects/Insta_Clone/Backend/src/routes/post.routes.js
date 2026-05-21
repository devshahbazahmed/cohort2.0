const express = require('express');
const postController = require('../controllers/post.controller.js');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const identifyUser = require('../middleware/auth.middleware.js');

const postRouter = express.Router();

/**
 * @route POST /api/post/
 * @description Create a post
 * @access Private
 */
postRouter.post(
  '/',
  upload.single('image'),
  identifyUser,
  postController.createPostController
);

/**
 * @route GET /api/post/
 * @description Get all posts
 * @access Private
 */

postRouter.get('/', identifyUser, postController.getPostsController);

/**
 * @route GET /api/post/details/:postId
 * @description Get post details
 * @access Private
 */

postRouter.get(
  '/details/:postId',
  identifyUser,
  postController.getPostDetailsController
);

/**
 * @route POST /api/post/like/:postId
 * @description Like a post
 * @access Private
 */
postRouter.post(
  '/like/:postId',
  identifyUser,
  postController.likePostController
);

/**
 * @route GET /api/post/feed
 * @description Get all the post created in the DB
 * @access Private
 */
postRouter.get('/feed', identifyUser, postController.getFeedController);

module.exports = postRouter;
