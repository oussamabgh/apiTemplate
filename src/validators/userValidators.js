const Joi = require('joi');

const schemas = {
  updateProfile: Joi.object({
    name: Joi.string().min(2).max(100),
    // allow clients to send only fields they want to change
  }),
};

module.exports = { schemas };
