import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import { sendEmail } from '../services/mail.service.js';

export async function register(req, res) {
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

  await sendEmail({
    to: email,
    subject: 'Welcome to Perplexity!',
    html: `
                <p>Hi ${username},</p>
                <p>Thank you for registering at <strong>Perplexity</strong>. We're excited to have you on board!</p>
                <p>Please verify your email address by clicking the link below:</p>
               
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
}
