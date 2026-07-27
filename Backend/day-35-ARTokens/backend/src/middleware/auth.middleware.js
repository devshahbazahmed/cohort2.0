import jwt from 'jsonwebtoken';
import UserModel from '../models/user.model.js';

const authMiddleware = async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
      return res.status(401).json({
        message: 'Unauthorized request',
      });
    }

    const decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);

    if (!decoded) {
      return res.status(401).json({
        message: 'Unauthorized request',
      });
    }

    const user = await UserModel.findById(decoded.id);

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Unauthorized request',
    });
  }
};

export default authMiddleware;
