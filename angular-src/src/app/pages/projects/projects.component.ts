import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service"

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectVisible: boolean = false;
  projects = [];

  constructor(private firebaseService: FirebaseService) {
    this.firebaseService.getProjects()
    .subscribe(res => {
      this.projects = res;
      console.log(this.projects)
    })
  }

  ngOnInit() {
  }

  hack(val) {
    console.log(Array.from(val))
    return Array.from(val);
  }

  deleteCompletedItem(itemIndex, projectKey) {
    this.firebaseService.deleteCompletedItem(projectKey, itemIndex)
  }

  deleteIncompleteItem(itemIndex, projectKey) {
    this.firebaseService.deleteIncompleteItem(projectKey, itemIndex)
    // .subscribe(res => {
    //   console.log(res)
    // })
  }

  expandProject(index) {
    let projects = document.getElementsByClassName("project-content-container")
    projects[index].classList.toggle("project-content-container-visible")
    // projects[index].classList.toggle("project-content-container-visible")
  }

}
