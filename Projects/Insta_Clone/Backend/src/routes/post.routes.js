const express = require('express');
const postController = require('../controllers/post.controller.js');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const postRouter = express.Router();

postRouter.post(
  '/',
  upload.single('image'),
  postController.createPostController
);

postRouter.get('/', postController.getPostsController);

postRouter.get('/details/:postId', postController.getPostDetailsController);

module.exports = postRouter;
