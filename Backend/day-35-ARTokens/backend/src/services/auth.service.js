import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../models/user.model.js';
import {
  generateAccessToken,
  generateRefreshToken,
} from '../utils/generateTokens.js';

const registerService = async (data) => {
  try {
    const { name, email, password } = data;

    if (!email || !password) {
      return res.status(400).json({
        message: 'All fields are required',
      });
    }

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: 'User with this email already exists',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const accessToken = generateAccessToken({ id: user._id });
    const refreshToken = generateRefreshToken({ id: user._id });

    user.refreshToken = refreshToken;
    await user.save();

    return { accessToken, refreshToken, user };
  } catch (error) {
    throw new Error(error);
  }
};

const loginService = async (data) => {
  try {
    const { email, password } = data;

    if (!email || !password) {
      return res.status(400).json({
        message: 'All fields are required',
      });
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({
        message: 'Invalid credentials',
      });
    }

    const accessToken = generateAccessToken({ id: user._id });
    const refreshToken = generateRefreshToken({ id: user._id });

    user.refreshToken = refreshToken;
    await user.save();

    return { accessToken, refreshToken, user };
  } catch (error) {
    throw new Error(error);
  }
};

const getAccessTokenService = async (refreshToken) => {
  const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

  if (!decoded) throw new Error('Unauthorized');

  const user = await UserModel.findById(decoded.id);

  if (!user) {
    throw new Error('User not found');
  }

  if (refreshToken !== user.refreshToken) {
    throw new Error('Unauthorized');
  }

  const accessToken = generateAccessToken({ id: user._id });

  return accessToken;
};

export { registerService, loginService, getAccessTokenService };
