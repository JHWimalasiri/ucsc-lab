const express = require('express');
const router = express.Router();
const Lab = require('../models/lab');


//localhost:3000/labs/
router.post('/viewlab', (req, res) => {
  let getLab = new Lab({
    date : req.body.date,
    fromtime : req.body.fromtime,
    totime : req.body.totime
  });
    Lab.getLab(getLab, function(err,lab) {
        if(!err){
                    res.json({Reservation_details:lab});
                }
                else{
                    console.log('Error in retrieving lab:' + JSON.stringify(err,undefined,2));
                }
    });
});

router.post('/savelab',(req, res, next) => {
    let newLab = new Lab({
        lab: req.body.lab,
        fromtime: req.body.fromtime,
        totime: req.body.totime,
        date: req.body.date,
        event: req.body.event
    });

    Lab.addLab(newLab,(err, lab) => {
      if(err) {
        // res.json({success: false, msg: 'Failed to register user'});
        res.json(err);
      } else {
        res.json({success: true, msg: 'Lab registered'});
      }
    });
});

router.post('/searchlab',(req, res, next) => {
  let findLab = new Lab({
    date : req.body.date,
    lab : req.body.lab
  });


  Lab.searchLab(findLab, function(err,lab) {
    if(!err){
      res.json({Reservation_details:lab});
    }
    else{
      console.log('Error in retrieving lab:' + JSON.stringify(err,undefined,2));
    }
  });
});

module.exports = router;
