import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router"
import { ProjectApiService } from "../../services/project-api.service"
import { FlashMessagesService } from "angular2-flash-messages"

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  project: object;

  constructor(private projectApiService: ProjectApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.refreshProject()
  }

  refreshProject() {
    this.activatedRoute.params
    .map(params => params['id'])
    .subscribe((id) => {
      let query = {projectId: id}
      this.projectApiService.getProjectById(query)
      .subscribe(res => {
        this.project = res
      })
    })
  }

  updateProject(projectObject) {
    this.projectApiService.updateProject(projectObject)
    .subscribe(res => {
      this.router.navigate(['/projects'])
    })
  }

}
