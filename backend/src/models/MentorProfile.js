const mongoose = require('mongoose');

const mentorProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  bio: {
    type: String,
    maxlength: 500
  },
  expertise: [{
    type: String,
    trim: true
  }],
  experience: {
    type: Number, // years of experience
    min: 0
  },
  education: {
    type: String,
    trim: true
  },
  certifications: [{
    type: String,
    trim: true
  }],
  availability: {
    type: String,
    enum: ['available', 'busy', 'unavailable'],
    default: 'available'
  },
  languages: [{
    type: String,
    enum: ['en', 'am', 'om'],
    default: ['en']
  }],
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  totalSessions: {
    type: Number,
    default: 0
  },
  isVerified: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('MentorProfile', mentorProfileSchema);
