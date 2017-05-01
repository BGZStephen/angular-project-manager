import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service"
import { FlashMessagesService } from "angular2-flash-messages"

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectVisible: boolean = false;
  projects = [];

  constructor(private apiService: ApiService, private flashMessage: FlashMessagesService) {
  }

  ngOnInit() {
    this.refreshProjects()
  }

  refreshProjects() {
    this.apiService.getProjectsByUser()
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
    this.apiService.deleteProject(projectObject)
    .subscribe(res => {
      this.flashMessage.show('Project Deleted', {cssClass: "message-success", timeout: 1500})
    })
  }

}
