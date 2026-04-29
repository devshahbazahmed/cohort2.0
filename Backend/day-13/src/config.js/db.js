require("dotenv").config();
const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log("Error in connecting to DB", err));
}

module.exports = connectDB;
