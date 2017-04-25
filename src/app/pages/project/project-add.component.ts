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
      let itemObject = {"description": projectTask1, "createdAt": createdDate}
      taskArray.push(itemObject)
    }
    if (projectTask2) {
      let itemObject = {"description": projectTask2, "createdAt": createdDate}
      taskArray.push(itemObject)
    }
    if (projectTask3) {
      let itemObject = {"description": projectTask3, "createdAt": createdDate}
      taskArray.push(itemObject)
    }
    if (projectTask4) {
      let itemObject = {"description": projectTask4, "createdAt": createdDate}
      taskArray.push(itemObject)
    }
    let projectObject = {"title": projectTitle, "description": projectDescription, "user": "Stephen", "createdAt": createdDate, incompleteItems: taskArray}
    this.firebaseService.addProject(projectObject)
  }

}
