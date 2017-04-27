const mongoose = require('mongoose');
const config = require('../config/database')

// User Schema
const ProjectSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  user: {
    type: Number
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  createdAt: {
    type: Date
  },
  incompleteItems: {
    type: Array
  },
  completedItems: {
    type: Array
  }
});

const Project = module.exports = mongoose.model('Project', ProjectSchema)
