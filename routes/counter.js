const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Counter = require('../models/counter');

// create counter

router.post('/create', (req, res, next) => {
  let newCounter = new Counter({
    projectCounter: 0,
    itemCounter: 0
  });
  Counter.createCounter(newCounter, (err) => {
    if(err){
      res.json({success: false, msg: "Failed to create counter"})
    } else {
      res.json({success: true, msg: "Counter created"})
    }
  })
})

module.exports = router;
