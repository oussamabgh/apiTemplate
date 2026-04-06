const userService = require('../services/userService');

const getMe = async (req, res) => {
  // req.user is populated by auth middleware — keep controllers thin and delegate to services
  const user = await userService.getProfile(req.user.id);
  return res.json({ data: user });
};

module.exports = { getMe };
