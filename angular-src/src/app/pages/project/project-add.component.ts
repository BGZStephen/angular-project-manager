import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service"

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  addProject(projectTitle, projectDescription, projectTask1, projectTask2, projectTask3, projectTask4) {
    let taskArray = [];
    let createdDate = Date()
    if (projectTask1) {
      let id = Math.floor(Math.random() * 1000000)
      let itemObject = {"key": id, "description": projectTask1, "createdAt": createdDate}
      taskArray.push(itemObject)
    }
    if (projectTask2) {
      let id = Math.floor(Math.random() * 1000000)
      let itemObject = {"key": id, "description": projectTask2, "createdAt": createdDate}
      taskArray.push(itemObject)
    }
    if (projectTask3) {
      let id = Math.floor(Math.random() * 1000000)
      let itemObject = {"key": id, "description": projectTask3, "createdAt": createdDate}
      taskArray.push(itemObject)
    }
    if (projectTask4) {
      let id = Math.floor(Math.random() * 1000000)
      let itemObject = {"key": id, "description": projectTask4, "createdAt": createdDate}
      taskArray.push(itemObject)
    }
    let projectObject = {"title": projectTitle, "description": projectDescription, "user": "Stephen", "createdAt": createdDate}
    this.firebaseService.addProject(projectObject, taskArray)
  }

}
