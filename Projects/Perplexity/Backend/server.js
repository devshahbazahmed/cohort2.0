import 'dotenv/config';
import app from './src/app.js';
import http from 'node:http';
import connectDB from './src/config/db.js';
import { initSocket } from './src/sockets/server.socket.js';

const PORT = process.env.PORT ?? 3000;

const httpServer = http.createServer(app);

initSocket(httpServer);

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
