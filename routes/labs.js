const express = require('express');
const router = express.Router();
const config = require('../config');
const Lab = require('../models/lab');

// Add a lab reservation
router.post('/dashboard', (req, res, next) => {
    res.send('Add lab');
    // let newLab = new Lab ({
    //   lab: req.body.lab,
    //   fromtime: req.body.fromtime,
    //   totime: req.body.totime,
    //   date: req.body.date,
    //   event: req.body.event
    // });

    // newLab.save((err,doc) =>{
    //     if(!err){
    //         res.send(doc);
    //     }
    //     else{
    //         console.log('Error in add lab:' + JSON.stringify(err,undefined,2));
    //     }
    // });
    // Lab.addLab(newLab, (err, lab) => {
    //     if(err) {
    //       // res.json({success: false, msg: 'Failed to add lab'});
    //       res.json(err);
    //     } else {
    //       res.json({success: true, msg: 'Lab added'});
    //     }
    //   });



});

module.exports = router;