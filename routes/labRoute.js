const express = require('express');
const router = express.Router();

var {Lab} = require('../models/lab');

//localhost:3000/labs/
router.get('/', (req, res) => {
    Lab.find((err,docs) => {
        if(!err){
                    res.send(docs);
                }
                else{
                    console.log('Error in retrieving lab:' + JSON.stringify(err,undefined,2));
                }
    });
});

router.post('/',(req,res) => {
    var lab = new Lab({
        lab: req.body.lab,
        fromtime: req.body.fromtime,
        totime: req.body.totime,
        date: req.body.date,
        event: req.body.event
    });

    lab.save((err,docs) => {
        if(!err){
            res.send(docs);
        }
        else{
            console.log('Error in lab save:' + JSON.stringify(err,undefined,2));
        }
    });
});

module.exports = router;