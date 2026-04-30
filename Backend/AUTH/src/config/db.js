require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error in connecting to DB', err));
}

module.exports = connectDB;
