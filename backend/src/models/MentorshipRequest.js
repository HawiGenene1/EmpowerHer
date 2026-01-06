const mongoose = require('mongoose');

const mentorshipRequestSchema = new mongoose.Schema({
  mentee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  skills: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Skill'
  }],
  message: {
    type: String,
    required: true,
    maxlength: 500
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected', 'cancelled'],
    default: 'pending'
  },
  responseMessage: {
    type: String,
    maxlength: 500
  },
  requestedAt: {
    type: Date,
    default: Date.now
  },
  respondedAt: Date,
  duration: {
    type: Number, // in weeks
    min: 1,
    max: 52
  },
  frequency: {
    type: String,
    enum: ['weekly', 'biweekly', 'monthly'],
    default: 'weekly'
  }
}, {
  timestamps: true
});

// Compound index to prevent duplicate requests
mentorshipRequestSchema.index({ mentee: 1, mentor: 1, status: 1 });

module.exports = mongoose.model('MentorshipRequest', mentorshipRequestSchema);
