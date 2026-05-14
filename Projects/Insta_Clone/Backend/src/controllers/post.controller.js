const PostModel = require('../models/post.model.js');
const Imagekit = require('@imagekit/nodejs');
const { toFile } = require('@imagekit/nodejs');
const jwt = require('jsonwebtoken');
const LikeModel = require('../models/like.model.js');

const imagekit = new Imagekit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  // console.log(req.body, req.file);

  const file = await imagekit.files.upload({
    file: new toFile(Buffer.from(req.file.Buffer), 'file'),
    fileName: 'test',
    folder: 'cohort-2-insta-clone-posts',
  });

  const post = await PostModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: req.user.id,
  });

  res.status(201).json({
    message: 'Post created successfully',
    post,
  });
}

async function getPostsController(req, res) {
  const userId = req.user.id;
  const posts = await PostModel.find({
    user: userId,
  });

  return res.status(200).json({
    message: 'User posts fetched successfully',
    posts,
  });
}

async function getPostDetailsController(req, res) {
  const userId = req.user.id;
  const postId = req.params.postId;

  const post = await PostModel.findById(postId);

  if (!post) {
    return res.status(404).json({
      message: 'Post not found',
    });
  }

  const isValidUser = post.user.toString() === userId;

  if (!isValidUser) {
    return res.status(403).json({
      message: 'Forbidden content',
    });
  }

  return res.status(200).json({
    message: 'Post fetched successfully',
    post,
  });
}

async function likePostController(req, res) {
  const username = req.user.username;
  const postId = req.params.postId;

  const post = await PostModel.findById(postId);

  if (!post) {
    return res.status(404).json({
      message: 'Post not found',
    });
  }

  const like = await LikeModel.create({
    post: postId,
    user: username,
  });
  return res.status(201).json({
    message: 'Post liked successfully',
    like,
  });
}

module.exports = {
  createPostController,
  getPostsController,
  getPostDetailsController,
  likePostController,
};
