const mongoose = require('mongoose');
const config = require('../config/database')

// User Schema
const ProjectSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  user: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: String,
    required: true
  },
  incompleteItems: {
    type: Array
  },
  completedItems: {
    type: Array
  }
});

const Project = module.exports = mongoose.model('Project', ProjectSchema)

module.exports.getProjectById = function(id, callback){
  Project.findOne(id, callback);
}

module.exports.getProjectsByUser = function(userId, callback){
  Project.find(userId, callback)
}

module.exports.addProject = function(projectObject, callback){
  projectObject.save(callback)
}
