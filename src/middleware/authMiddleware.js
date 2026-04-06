const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const authenticate = async (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) {
    const err = new Error('Missing authorization header');
    err.status = 401;
    return next(err);
  }
  const token = auth.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(payload.sub);
    if (!user) {
      const err = new Error('User not found');
      err.status = 401;
      return next(err);
    }
    req.user = user;
    return next();
  } catch (e) {
    const err = new Error('Invalid token');
    err.status = 401;
    return next(err);
  }
};

module.exports = { authenticate };
