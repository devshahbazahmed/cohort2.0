import mongoose from 'mongoose';

async function connectDB() {
  const conn = await mongoose.connect(process.env.MONGODB_URI);
  console.log(`MongoDB Connected: ${conn.connection.host}`);
}

export default connectDB;
