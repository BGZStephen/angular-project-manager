import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectVisible: boolean = false;
  projects = [];

  constructor() {
  }

  ngOnInit() {
  }

  expandProject(index) {
    let projects = document.getElementsByClassName("project-content-container")
    projects[index].classList.toggle("project-content-container-visible")
    // projects[index].classList.toggle("project-content-container-visible")
  }

}
