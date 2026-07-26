import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';

const PORT = process.env.PORT ?? 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  let sum = 0;
  for (let i = 0; i < 100000000; i++) {
    sum += i;
  }
  res.status(200).json({ message: `Sum calculated successfully` });
});

app.listen(PORT, () => {
  console.log(`Server started running on port ${PORT}`);
});
