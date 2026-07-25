import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  res.send(`Hello World! Sum is ${sum}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
