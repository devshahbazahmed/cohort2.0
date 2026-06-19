import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import { sendEmail } from '../services/mail.service.js';

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 * @body { username, email, password }
 */
export async function register(req, res) {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      return res.status(400).json({
        message: 'User with this email already exists',
        success: false,
        err: 'User already exists',
      });
    }

    const user = await User.create({
      username,
      email,
      password,
    });

    const emailVerificationToken = jwt.sign(
      {
        email: user.email,
      },
      process.env.JWT_SECRET
    );

    await sendEmail({
      to: email,
      subject: 'Welcome to Perplexity!',
      html: `
                  <p>Hi ${username},</p>
                  <p>Thank you for registering at <strong>Perplexity</strong>. We're excited to have you on board!</p>
                  <p>Please verify your email address by clicking the link below:</p>
                  <a href="http://localhost:3000/api/verify-email?token=${emailVerificationToken}">Verify Email</a>
                  <p>If you did not create an account, please ignore this email.</p>
                  <p>Best regards,<br>The Perplexity Team</p>
          `,
    });

    return res.status(201).json({
      message: 'User registered successfully',
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Invalid inputs',
      success: false,
      err: error.message,
    });
  }
}

/**
 * @route POST /api/auth/login
 * @desc Login user and return JWT token
 * @access Public
 * @body { email, password }
 */
export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(400).json({
        message: 'Invalid email or password',
        success: false,
        err: 'Invalid email or password',
      });
    }

    const isPasswordMatch = await user.comparePassword(password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        message: 'Invalid email or password',
        success: false,
        err: 'Invalid email or password',
      });
    }

    if (!user.verified) {
      return res.status(400).json({
        message: 'Please verify your email before logging in',
        success: false,
        err: 'Email not verified',
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.cookie('token', token);

    return res.status(200).json({
      message: 'Login successfully',
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Invalid email or password',
      success: false,
      err: 'Invalid email or password',
    });
  }
}

/**
 * @route GET /api/auth/get-me
 * @desc Get current user's login details
 * @access Private
 */

export async function getMe(req, res) {
  const userId = req.user.id;
  const user = await User.findById(userId).select('-password');

  if (!user) {
    return res.status(404).json({
      message: 'User not found',
      success: false,
      err: 'User not found',
    });
  }

  return res.status(200).json({
    message: 'User fetched successfully',
    success: true,
  });
}

/**
 * @route GET /api/auth/verify-email
 * @desc Verify user's email address
 * @access Public
 * @query { token }
 */
export async function verifyEmail(req, res) {
  const token = req.query.token;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({
      email: decoded.email,
    });

    if (!user) {
      return res.status(400).json({
        message: 'Invalid token',
        success: false,
        err: 'User not found',
      });
    }

    user.verified = true;
    await user.save();

    const html = `
      <h1>Email verified successfully</h1>
      <p>Your email has been verified. You can now login to your account.</p>
      <a href="http://localhost:3000/login">Go to Login</a>`;

    return res.send(html);
  } catch (error) {
    return res.status(400).json({
      message: 'Invalid token',
      success: false,
      err: error.message,
    });
  }
}
