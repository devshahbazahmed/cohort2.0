import express from 'express';
import useGraph from './services/graph.ai.service.js';

const app = express();

app.get('/health', (_, res) => {
  return res.status(200).json({
    status: true,
  });
});

app.post('/use-graph', async (req, res) => {
  await useGraph('What is the capital of France?');
});

export default app;
