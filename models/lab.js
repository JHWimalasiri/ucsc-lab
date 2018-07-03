const mongoose = require('mongoose');
const config = require('../config');



var Lab = mongoose.model('Lab',{
  lab: {
    type: String
  },
  fromtime: {
    type: Number
  },
  totime: {
    type: Number
  },
  date: {
    type: String
  },
  event: {
    type: String
  }
});



module.exports = {Lab};