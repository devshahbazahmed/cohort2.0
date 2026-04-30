const express = require('express');
const UserModel = require('../models/user.model.js');
const { createHash } = require('node:crypto');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, username, password } = req.body;

  const existingUser = await UserModel.findOne({ email });

  if (existingUser) {
    return res.status(409).json({
      message: 'User with this email already exists',
    });
  }

  const hashedPassword = createHash('sha256').update(password).digest('hex');

  const user = await UserModel.create({
    email,
    username,
    password: hashedPassword,
  });

  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.cookie('token', token);

  return res.status(201).json({
    message: 'User registered successfully',
    id: user._id,
    token,
  });
});

router.get('/get-me', async (req, res) => {
  const token = req.cookies.token;

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const user = await UserModel.findById(decoded.id).select('-password');

  return res.status(200).json({
    message: 'User fetched successfully',
    user,
  });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: 'User with this email does not exists',
    });
  }

  const hashedPassword = createHash('sha256').update(password).digest('hex');

  if (hashedPassword !== user.password) {
    return res.status(400).json({
      message: 'Invalid credentials',
    });
  }

  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.cookie('token', token);

  return res.status(200).json({
    message: 'User logged in successfully',
    user,
  });
});

module.exports = router;
