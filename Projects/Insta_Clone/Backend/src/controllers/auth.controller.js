const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model.js');

async function registerController(req, res) {
  const { username, email, password, bio, profileImage } = req.body;

  const existingUser = await UserModel.findOne({
    $or: [{ username }, { email }],
  });

  if (existingUser) {
    return res.status(409).json({
      message:
        'User with' + existingUser.email === email
          ? ' email already exists'
          : ' username already exists',
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await UserModel.create({
    username,
    email,
    bio,
    profileImage,
    password: hash,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  res.cookie('token', token);

  return res.status(201).json({
    message: 'User registered successfully',
    user: {
      email: user.email,
      username: user.username,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}

async function loginController(req, res) {
  const { username, email, password } = req.body;

  const user = await UserModel.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    return res.status(404).json({
      message: 'User with this username or email does not exist',
    });
  }

  // const hash = crypto.createHash('sha256').update(password).digest('hex');

  // if (hash !== user.password) {
  //   return res.status(401).json({
  //     message: 'Invalid credentials',
  //   });
  // }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: 'Invalid credentials',
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  res.cookie('token', token);

  return res.status(200).json({
    message: 'User logged in successfully',
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}

module.exports = {
  registerController,
  loginController,
};
