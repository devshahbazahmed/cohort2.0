import {
  getAccessTokenService,
  loginService,
  registerService,
} from '../services/auth.service.js';

const register = async (req, res) => {
  const result = await registerService(req.body);

  const { accessToken, refreshToken, user } = result;

  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    sameSite: 'lax',
    secure: false,
    maxAge: 10 * 60 * 1000,
  });

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    sameSite: 'lax',
    secure: false,
    maxAge: 24 * 60 * 60 * 1000,
  });

  return res.status(201).json({
    message: 'User registered successfully',
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
};

const login = async (req, res) => {
  const result = await loginService(req.body);
  const { accessToken, refreshToken, user } = result;

  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    sameSite: 'lax',
    secure: false,
    maxAge: 10 * 60 * 1000,
  });

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    sameSite: 'lax',
    secure: false,
    maxAge: 24 * 60 * 60 * 1000,
  });

  return res.status(200).json({
    message: 'User logged in successfully',
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
};

const getAccessToken = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken)
    return res.status(401).json({ message: 'Unauthorized request' });

  const accessToken = await getAccessTokenService(refreshToken);

  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    sameSite: 'lax',
    secure: false,
    maxAge: 10 * 60 * 1000,
  });

  return res.status(200).json({
    message: 'Access token generated',
  });
};

export { register, login, getAccessToken };
