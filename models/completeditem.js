const mongoose = require('mongoose');
const config = require('../config/database')

// User Schema
const CompletedItemSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  projectId: {
    type: Number
  }
  description: {
    type: String
  },
  createdAt: {
    type: Date
  }
});

const CompletedItem = module.exports = mongoose.model('CompletedItem', CompletedItemSchema)
