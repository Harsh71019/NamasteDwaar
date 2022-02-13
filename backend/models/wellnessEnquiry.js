import validator from 'validator';
const mongoose = require('mongoose');

const wellnessEnquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
  },
  age: {
    type: String,
    required: [true, 'Please enter your age'],
  },
  program: {
    type: String,
    required: [true, 'Please select your program'],
  },
  mobile: {
    type: Number,
    required: [true, 'Please enter your mobile'],
  },
  message: {
    type: String,
    required: [true, 'Please enter your message'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports =
  mongoose.models.WellnessEnquiry ||
  mongoose.model('WellnessEnquiry', wellnessEnquirySchema);
