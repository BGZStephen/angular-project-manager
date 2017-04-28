const mongoose = require('mongoose');
const config = require('../config/database')

// Project Schema
const ProjectSchema = mongoose.Schema({
  projectId: {
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
    type: Number,
    required: true
  },
  incompleteItems: [{
      container: String,
      itemId: Number,
      projectId: Number,
      description: String,
      createdAt: Number
    }],
  completedItems: [{
    container: String,
    itemId: Number,
    projectId: Number,
    description: String,
    createdAt: Number
  }],
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

module.exports.addItem = function(itemObject, callback){
  Project.update({'projectId': itemObject.projectId},{'$push': {'incompleteItems': itemObject}}, callback)
}

// Check the taret container within the itemObject and move the item to the corresponding array within the project defined by projectId

module.exports.moveItem = function(itemObject, callback){
  if(itemObject.container == 'incompleteItems') {
    Project.update({projectId: itemObject.projectId},{$push: {incompleteItems: itemObject}}, callback)
  } else {
    Project.update({projectId: itemObject.projectId},{$push: {completedItems: itemObject}}, callback)
  }
}

// DO NOT USE THIS CALL FOR DELETING STANDALONE ITEMS
// this precedes a moveItem call by deleting the item defined by itemId within its current array on the project.

module.exports.deleteMovedItem = function(itemObject, callback){
  if(itemObject.container == 'incompleteItems') {
    Project.update({},{$pull: {completedItems: {itemId: itemObject.itemId}}}, callback)
  } else {
    Project.update({},{$pull: {incompleteItems: {itemId: itemObject.itemId}}}, callback)
  }
}
