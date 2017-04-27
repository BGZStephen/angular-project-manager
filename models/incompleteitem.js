const mongoose = require('mongoose');
const config = require('../config/database')

// User Schema
const IncompleteItemSchema = mongoose.Schema({
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

const IncompleteItem = module.exports = mongoose.model('IncompleteItem', IncompleteItemSchema)
