const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Project = require('../models/project');
const Counter = require('../models/counter');

// Add

router.post('/add', (req, res, next) => {
  let newDate = new Date().getTime();
  let query = {};
  let updateQuery = {};
  let projectCounter = 100;

  let newProject = new Project({
    projectId: projectCounter,
    userId: parseInt(req.body.userId),
    title: req.body.title,
    description: req.body.description,
    createdAt: newDate,
    incompleteItems: [],
    completedItems: [],
  });

  Counter.getCounter(query, (err, callback) => {
    if(err){
      res.json({success: false, msg:'Failed to get counter'});
    } else {
      newProject.projectId = callback.projectCounter
      Project.addProject(newProject, (err) => {
        if(err){
          res.json({success: false, msg:'Failed to add project'});
        } else {
          updatedCounter = callback.projectCounter +1
          updateQuery = {projectCounter: updatedCounter}
          Counter.updateCounter(updateQuery, (err) => {
            if(err){
              res.json({success: false, msg:'Failed to update counter'});
            } else {
              res.json({success: true, msg:'Project added'});
            }
          })
        }
      });
    }
  })
});

//Find by ID

router.post('/id', (req, res, next) => {
  let query = {
    projectId: req.body.id
  }

  Project.getProjectById(query, (err, project) => {
    if(err){
      res.json({success: false, msg:'Project not found'});
    } else {
      res.json(project);
    }
  })
})

// Find by user

router.post('/user', (req, res, next) => {
  let query = {
    user: req.body.user
  }

  Project.getProjectsByUser(query, (err, projects) => {
    if(err){
      res.json({success: false, msg:'User not found'});
    } else {
      res.json(projects);
    }
    console.log(projects)
  })
})

var itemIdCounter = 100;

router.post('/createitem', (req, res, next) => {
  let newDate = new Date().getTime()
  let query = {};
  let newItem = {
    container: "incompleteItems",
    itemId: itemIdCounter,
    projectId: req.body.projectId,
    description: req.body.description,
    createdAt: newDate
  }

  Counter.getCounter(query, (err, callback) => {
    if(err){
      res.json({success: false, msg:'Failed to get counter'});
    } else {
      newItem.itemId = callback.itemCounter
      Project.addItem(newItem, (err, item) => {
        if(err){
          res.json({success: false, msg:'Item not added'});
        } else {
          let updatedCounter = callback.itemCounter +1
          updateQuery = {itemCounter: updatedCounter}
          Counter.updateCounter(updateQuery, (err) => {
            if(err){
              res.json({success: false, msg:'Failed to update item counter'});
            } else {
              res.json({success: true, msg:'Item added'});
            }
          })
        }
      })
    }
  })
})

router.post('/moveitem', (req, res, next) => {
  let query = {
    container: req.body.container,
    itemId: req.body.itemId,
    projectId: req.body.projectId,
    description: req.body.description,
    createdAt: req.body.createdAt
  }

  Project.deleteMovedItem(query, (err) =>{
    if(err){
      res.json({success: false, msg:'Item failed deletion'});
    } else {
      Project.moveItem(query, (err) => {
        if(err){
          res.json({success: false, msg:'Item not added'});
        } else {
          res.json({success: true, msg:'Item moved'});
        }
      })
    }
  })
})

router.post('/deleteitem', (req, res, next) => {
  let query = {
    itemId: req.body.id,
  }
  Project.deleteItem(query, (err) => {
    if(err){
      res.json({success: false, msg:'Something went wrong, item not deleted'});
    } else {
      res.json({success: true, msg:'Item deleted'});
    }
  })
})

module.exports = router;
