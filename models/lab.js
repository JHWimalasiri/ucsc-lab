const mongoose = require('mongoose');
const config = require('../config');

// User Schema
const LabSchema = mongoose.Schema ({
  lab: {
    type: String
  },
  fromtime: {
    type: String,
    required: true
  },
  totime: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  event: {
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model('Lab', LabSchema);