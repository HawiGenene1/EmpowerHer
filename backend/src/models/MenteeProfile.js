const mongoose = require('mongoose');

const menteeProfileSchema = new mongoose.Schema({
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
  goals: [{
    type: String,
    trim: true
  }],
  interests: [{
    type: String,
    trim: true
  }],
  currentSkills: [{
    skill: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Skill'
    },
    level: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      default: 'beginner'
    }
  }],
  desiredSkills: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Skill'
  }],
  education: {
    type: String,
    trim: true
  },
  experience: {
    type: Number, // years of experience
    min: 0
  },
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
  preferredMentorLanguages: [{
    type: String,
    enum: ['en', 'am', 'om'],
    default: ['en']
  }],
  mentorshipPreferences: {
    duration: {
      type: Number, // preferred duration in weeks
      min: 1,
      max: 52
    },
    frequency: {
      type: String,
      enum: ['weekly', 'biweekly', 'monthly'],
      default: 'weekly'
    },
    communicationStyle: {
      type: String,
      enum: ['formal', 'casual', 'mixed'],
      default: 'mixed'
    }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('MenteeProfile', menteeProfileSchema);
