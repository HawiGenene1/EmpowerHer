const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    maxlength: 500
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  },
  questions: [{
    question: {
      type: String,
      required: true
    },
    options: [{
      type: String,
      required: true
    }],
    correctAnswer: {
      type: Number,
      required: true,
      min: 0
    },
    explanation: String,
    points: {
      type: Number,
      default: 1,
      min: 1
    }
  }],
  passingScore: {
    type: Number,
    min: 0,
    max: 100,
    default: 70
  },
  timeLimit: {
    type: Number, // in minutes
    min: 1
  },
  attemptsAllowed: {
    type: Number,
    min: 1,
    default: 3
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Quiz', quizSchema);
