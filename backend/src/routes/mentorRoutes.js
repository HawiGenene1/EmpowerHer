const express = require('express');
const { body } = require('express-validator');
const mentorController = require('../controllers/mentorController');
const { authenticateToken } = require('../middleware/authMiddleware');
const { requireMentor, requireAdmin } = require('../middleware/roleMiddleware');

const router = express.Router();

// All mentor routes require authentication
router.use(authenticateToken);

// Validation rules
const createProfileValidation = [
  body('bio').optional().isLength({ max: 500 }).withMessage('Bio must be less than 500 characters'),
  body('expertise').optional().isArray().withMessage('Expertise must be an array'),
  body('experience').optional().isInt({ min: 0 }).withMessage('Experience must be a positive number'),
  body('education').optional().trim().isLength({ max: 100 }).withMessage('Education must be less than 100 characters'),
  body('languages').optional().isArray().withMessage('Languages must be an array')
];

// Public routes
router.get('/', mentorController.getAllMentors);
router.get('/:id', mentorController.getMentorById);
router.get('/:id/profile', mentorController.getMentorProfile);

// Mentor only routes
router.post('/profile', requireMentor, createProfileValidation, mentorController.createOrUpdateProfile);
router.put('/profile', requireMentor, createProfileValidation, mentorController.createOrUpdateProfile);
router.put('/availability', requireMentor, mentorController.updateAvailability);

// Admin routes
router.put('/:id/verify', requireAdmin, mentorController.verifyMentor);
router.delete('/:id', requireAdmin, mentorController.deleteMentor);

module.exports = router;
