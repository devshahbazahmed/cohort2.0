import express from 'express';
import runGraph from '../src/ai/graph.ai.js';

const app = express();

app.get('/', async (req, res) => {
  const result = await runGraph('Write an code for Factorial function in js');
});

export default app;
