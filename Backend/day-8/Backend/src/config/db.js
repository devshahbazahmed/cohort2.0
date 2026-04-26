const mongoose = require('mongoose');

function connectDB() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB Database connected'))
    .catch((err) =>
      console.log('Error in connecting to MongoDB database', err)
    );
}

module.exports = connectDB;
