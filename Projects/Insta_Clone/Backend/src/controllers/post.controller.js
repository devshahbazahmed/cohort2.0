const PostModel = require('../models/post.model.js');
const Imagekit = require('@imagekit/nodejs');
const { toFile } = require('@imagekit/nodejs');

const imagekit = new Imagekit({
  privateKey: process.env,
});

async function createPostController(req, res) {
  console.log(req.body, req.file);
  const file = await imagekit.files.upload({
    file: new toFile(Buffer.from(req.file.Buffer), 'file'),
    fileName: 'test',
  });

  res.send(file);
}

module.exports = {
  createPostController,
};
