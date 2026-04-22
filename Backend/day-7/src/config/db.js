const mongoose = require('mongoose');

function connectToDB() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.error('Error in connecting MongoDB', err));
}

module.exports = connectToDB;
