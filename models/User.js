const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
  },
  avatar: {
    type: String
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'seller', 'agent'],
    default: 'seller'
  },
  postalCode: {
    type: String,
  },
  licenseNumber: {
    type: String,
  },
  stateLicensed: {
    type: String,
  },
  yearsOfExprerience: {
    type: String,
  },
  affiliations: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('users', UserSchema);
