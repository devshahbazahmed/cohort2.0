import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.routes.js';
import homeRouter from './routes/home.routes.js';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/health', (req, res) => {
  return res.status(200).json({ status: 'ok' });
});

app.use('/api/v1/users', authRouter);
app.use('/api/v1/home', homeRouter);

export default app;
