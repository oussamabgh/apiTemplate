// Centralized error handler. Returns consistent JSON structure for errors.

const errorHandler = (err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const response = {
    error: {
      message: err.message || 'Internal server error',
    },
  };
  if (err.details) response.error.details = err.details;
  if (process.env.NODE_ENV !== 'production' && err.stack) response.error.stack = err.stack;
  return res.status(status).json(response);
};

module.exports = { errorHandler };
