import { Component, OnInit } from '@angular/core';
import { ProjectApiService } from "../../services/project-api.service"
import { Router } from "@angular/router"

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {

  constructor(private projectApiService: ProjectApiService, private router: Router) { }

  ngOnInit() {
  }

  addProject(projectObject) {
    this.projectApiService.addProject(projectObject)
    .subscribe(res => {
      this.router.navigate(['/projects'])
    })
  }
}
