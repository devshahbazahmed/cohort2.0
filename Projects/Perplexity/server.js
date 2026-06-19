import 'dotenv/config';
import app from './src/app.js';
import connectDB from './src/config/db.js';
import { testAi } from './src/services/ai.service.js';

testAi();

const PORT = process.env.PORT ?? 3000;

const start = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server started running on port ${PORT}`);
  });
};

start().catch((err) => {
  console.log(`MongoDB connection error: ${err}`);
  process.exit(1);
});
