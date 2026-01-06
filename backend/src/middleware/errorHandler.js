const { errorResponse } = require('../utils/responseFormatter');

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map(val => val.message);
    return res.status(400).json(errorResponse('Validation Error', errors));
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(400).json(errorResponse(`${field} already exists`));
  }

  // Mongoose cast error
  if (err.name === 'CastError') {
    return res.status(400).json(errorResponse('Invalid ID format'));
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json(errorResponse('Invalid token'));
  }

  if (err.name === 'TokenExpiredError') {
    return res.status(401).json(errorResponse('Token expired'));
  }

  // Default server error
  res.status(500).json(errorResponse('Internal server error'));
};

const notFound = (req, res, next) => {
  res.status(404).json(errorResponse('Route not found'));
};

module.exports = {
  errorHandler,
  notFound
};
