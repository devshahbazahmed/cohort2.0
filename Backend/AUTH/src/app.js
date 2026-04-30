const express = require('express');
const authRouter = require('./routes/user.routes.js');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Server is up and running',
  });
});

module.exports = app;
