const PostModel = require('../models/post.model.js');
const Imagekit = require('@imagekit/nodejs');
const { toFile } = require('@imagekit/nodejs');
const jwt = require('jsonwebtoken');

const imagekit = new Imagekit({
  privateKey: process.env,
});

async function createPostController(req, res) {
  console.log(req.body, req.file);

  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: 'Token not provided. Unauthorized access',
    });
  }

  let decoded = null;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: 'User not authorized',
    });
  }

  console.log(decoded);

  const file = await imagekit.files.upload({
    file: new toFile(Buffer.from(req.file.Buffer), 'file'),
    fileName: 'test',
    folder: 'cohort-2-insta-clone-posts',
  });

  const post = await PostModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: decoded.id,
  });

  res.status(201).json({
    message: 'Post created successfully',
    post,
  });
}

module.exports = {
  createPostController,
};
