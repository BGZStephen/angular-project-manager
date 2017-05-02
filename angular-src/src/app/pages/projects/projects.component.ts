import { Component, OnInit } from '@angular/core';
import { ProjectApiService } from "../../services/project-api.service"
import { Router } from "@angular/router"
import { FlashMessagesService } from "angular2-flash-messages"

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectVisible: boolean = false;
  projects = [];

  constructor(private projectApiService: ProjectApiService, private flashMessage: FlashMessagesService, private router: Router) {
  }

  ngOnInit() {
    this.refreshProjects()
  }

  refreshProjects() {
    this.projectApiService.getProjectsByUser()
    .subscribe(res => {
      this.projects = res;
    })
  }

  expandProject(index) {
    let projects = document.getElementsByClassName("project-content-container")
    projects[index].classList.toggle("project-content-container-visible")
    // projects[index].classList.toggle("project-content-container-visible")
  }

  deleteProject(projectObject) {
    this.projectApiService.deleteProject(projectObject)
    .subscribe(res => {
      this.flashMessage.show('Project Deleted', {cssClass: "message-success", timeout: 1500})
      this.router.navigate(['/projects'])
    })
  }

}
