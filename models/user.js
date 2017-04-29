const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const config = require('../config/database')

// User Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  userId: {
    type: Number,
    unique: true
  }
});

const User = module.exports = mongoose.model('User', UserSchema)

module.exports.addUser = function(userObject, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(userObject.password, salt, (err, hash) => {
      if(err) {
        throw(err)
      }
      userObject.password = hash;
      userObject.save(callback)
    })
  })
}

module.exports.deleteUser = function(query, callback){
  User.findOne(query, callback).remove().exec()
}

module.exports.getUser = function(query, callback){
  User.findOne(query, callback)
}

module.exports.getUsers = function(query, callback){
  User.find({}, callback)
}

module.exports.getUserByUsername = function(query, callback){
  User.findOne({username: query.username}, callback)
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err
    callback(null, isMatch)
  })
}
