const express = require('express');
const postController = require('../controllers/post.controller.js');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const identifyUser = require('../middleware/auth.middleware.js');

const postRouter = express.Router();

postRouter.post(
  '/',
  upload.single('image'),
  identifyUser,
  postController.createPostController
);

postRouter.get('/', identifyUser, postController.getPostsController);

postRouter.get(
  '/details/:postId',
  identifyUser,
  postController.getPostDetailsController
);

module.exports = postRouter;
