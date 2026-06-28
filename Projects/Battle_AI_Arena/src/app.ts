import express from 'express';

const app = express();

app.get('/health', (_, res) => {
  return res.status(200).json({
    status: true,
  });
});

export default app;
