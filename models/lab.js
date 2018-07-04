const mongoose = require('mongoose');
const config = require('../config');



const labSchema = mongoose.Schema({
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


const Lab = module.exports = mongoose.model('Lab', labSchema);




module.exports.addLab = function(newLab, callback) {
  newLab.save(callback);
}

module.exports.getLab = function(getLab ,callback){
  Lab.find(
    {date : getLab.date, $or : [
        {$and : [{fromtime : {$lt : getLab.fromtime}}, {totime : {$gt : getLab.fromtime}}]},
        {$and : [{fromtime : {$lt : getLab.totime}}, {totime : {$gt : getLab.totime}}]},
        {$and : [{fromtime : {$gte : getLab.fromtime}}, {totime : {$lte : getLab.totime}}]}
      ]},
  callback);
}

module.exports.searchLab = function (findLab, callback) {
  Lab.find({date : findLab.date, lab : findLab.lab}, callback);
}


