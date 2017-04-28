const mongoose = require('mongoose');
const config = require('../config/database')

// Counter Schema
const CounterSchema = mongoose.Schema({
  projectCounter: Number,
  itemCounter: Number
});

const Counter = module.exports = mongoose.model('Counter', CounterSchema)

module.exports.getCounter = function(query, callback){
  Counter.findOne({}, callback);
}

module.exports.updateCounter = function(updatedCounter, callback){
  Counter.update(updatedCounter, callback);
}

// THIS SHOULD ONLY BE CALLED ONCE TO CREATE THE COUNTER, IF COMMENTED OUT, ASSUME ALREADY CREATED

// module.exports.createCounter = function(counterObject, callback){
//   counterObject.save(callback);
// }
