const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    caption: {
      type: String,
      default: '',
    },
    imgUrl: {
      type: String,
      required: [true, 'Image url is required for creating a post'],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'UserId is required'],
    },
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model('Post', postSchema);

module.exports = PostModel;
