const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Project = require('../models/project');

// Add

var projectIdCounter = 100;

router.post('/add', (req, res, next) => {
  let newProject = new Project({
    id: projectIdCounter,
    user: req.body.user,
    title: req.body.title,
    description: req.body.description,
    createdAt: req.body.createdAt,
    incompleteItems: req.body.incompleteItems,
    completedItems: req.body.completedItems,
  });

  Project.addProject(newProject, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to add project'});
    } else {
      res.json({success: true, msg:'Project added'});
    }
  });
  projectIdCounter += 1;
});

//Find by ID

router.post('/id', (req, res, next) => {
  let query = {
    id: req.body.id
  }

  Project.getProjectById(query, (err, project) => {
    if(err){
      res.json({success: false, msg:'Project not found'});
    } else {
      res.json(project);
    }
    console.log(project)
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

module.exports = router;
