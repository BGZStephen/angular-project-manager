import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service"

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectVisible: boolean = false;
  projects = [];

  constructor(private apiService: ApiService) {
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



}
