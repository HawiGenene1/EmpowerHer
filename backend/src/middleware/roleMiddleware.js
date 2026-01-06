const { errorResponse } = require('../utils/responseFormatter');

const requireRole = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json(errorResponse('Authentication required'));
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json(errorResponse('Insufficient permissions'));
    }

    next();
  };
};

const requireMentor = requireRole('mentor', 'admin');
const requireAdmin = requireRole('admin');
const requireMentee = requireRole('mentee', 'mentor', 'admin');

module.exports = {
  requireRole,
  requireMentor,
  requireAdmin,
  requireMentee
};
