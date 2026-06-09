const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, 'Song URL is required'],
  },
  posterUrl: {
    type: String,
    required: [true, 'Poster URL is required'],
  },
  title: {
    type: String,
    required: [true, 'Song title is required'],
  },
  mood: {
    type: String,
    enum: {
      values: ['sad', 'happy', 'surprise'],
      message: 'Please select from sad, happy or surprise',
    },
  },
});

const SongModel = mongoose.model('Songs', songSchema);

module.exports = SongModel;
