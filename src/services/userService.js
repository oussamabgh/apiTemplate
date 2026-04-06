const userModel = require('../models/userModel');

const getProfile = async (userId) => {
  const user = await userModel.findById(userId);
  if (!user) {
    const err = new Error('User not found');
    err.status = 404;
    throw err;
  }
  return user;
};

module.exports = { getProfile };
