const express = require('express');
const router = express.Router();
const config = require('../config/database');
const jwt = require('jsonwebtoken');
const User = require('../models/user')
const Counter = require('../models/counter')

// Register user & increment userCounter
router.post('/register', (req, res, next) => {
  let query = {}
  let updatedCounter;
  let updatedQuery;
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  })

  Counter.getCounter(query, (err, callback) => {
    if(err) {
      res.json({success: false, msg: 'Failed to get ID'})
    } else {
      newUser.userId = callback.userCounter
      User.addUser(newUser, (err) => {
        if(err) {
          res.json({success: false, msg: 'Failed to add User'})
        } else {
          updatedCounter = callback.userCounter +1
          updateQuery = {userCounter: updatedCounter}
          Counter.updateCounter(updateQuery, (err) => {
            if(err){
              res.json({success: false, msg:'Failed to update counter'});
            } else {
              res.json({success: true, msg:'User added'});
            }
          })
        }
      })
    }
  })
})

router.post('/getbyid', (req, res, next) => {
  let query = {
    userId: req.body.userId
  }

  User.getUser(query, (err, callback) => {
    if(err) {
      res.json({success: false, msg: "User not found"})
    } else {
      res.json(callback)
    }
  })
})

router.post('/getallusers', (req, res, next) => {
  User.getUsers(query, (err, callback) => {
    if(err) {
      res.json({success: false, msg: "Could not retrieve users"})
    } else {
      res.json(callback)
    }
  })
})

router.post('/authenticate', (req, res, next) => {
  let query = {
    username: req.body.username,
    password: req.body.password
  }

  User.getUserByUsername(query, (err, user) => {
    if(err) {
      res.json({success: false, msg: "User not found"})
    } else {
      User.comparePassword(query.password, user.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch){
          const token = jwt.sign(user, config.secret, {
            expiresIn: 604800 // 1 week
          });

          res.json({
            success: true,
            token: 'JWT '+token,
            user: {
              userId: user.userId,
              name: user.name,
              username: user.username,
              email: user.email
            }
          })
        } else {
          return res.json({success: false, msg: 'Wrong password'});
        }
      })
    }
  })
})

router.post('/deleteuser', (req, res, next) => {
  let query = {
    userId: req.body.userId
  }

  User.deleteUser(query, (err, callback) => {
    if(err) {
      res.json({success: false, msg: "User not found"})
    } else {
      res.json(callback)
    }
  })
})

module.exports = router;
