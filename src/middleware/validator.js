// Generic request body validator middleware using Joi

const validateBody = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, { abortEarly: false, stripUnknown: true });
  if (error) {
    const err = new Error('Validation error');
    err.status = 400;
    err.details = error.details.map((d) => ({ message: d.message, path: d.path }));
    return next(err);
  }
  req.body = value;
  return next();
};

module.exports = { validateBody };
