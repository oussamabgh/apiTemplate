const authService = require('../services/authService');

// Controllers handle request/response and call services for business logic
const register = async (req, res) => {
  const user = await authService.register(req.body);
  return res.status(201).json({ data: user });
};

const login = async (req, res) => {
  const result = await authService.login(req.body);
  return res.json({ data: result });
};

module.exports = { register, login };
