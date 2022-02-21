import validator from 'validator';
const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    validate: [validator.isEmail, 'Please enter valid email address'],
  },
  mobile: {
    type: Number,
    required: [true, 'Please enter your mobile'],
  },
  message: {
    type: String,
    required: [true, 'Please enter your message'],
  },
  path: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports =
  mongoose.models.Enquiry || mongoose.model('Enquiry', enquirySchema);
