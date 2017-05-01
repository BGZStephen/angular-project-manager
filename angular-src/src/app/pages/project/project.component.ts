import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router"
import { ApiService } from "../../services/api.service"
import { FlashMessagesService } from "angular2-flash-messages"

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: object;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router, private flashMessage: FlashMessagesService) {

  }

  ngOnInit() {
    this.refreshProject()
  }

  refreshProject() {
    this.activatedRoute.params
    .map(params => params['id'])
    .subscribe((id) => {
      let query = {projectId: id}
      this.apiService.getProjectById(query)
      .subscribe(res => {
        this.project = res
      })
    })
  }

  deleteProject(projectObject) {
    this.apiService.deleteProject(projectObject)
    .subscribe(res => {
      this.router.navigate(['/projects'])
      this.flashMessage.show('Project Deleted', {cssClass: "message-success", timeout: 1500})
    })
  }

  addItem(itemObject) {
    this.apiService.addProjectItem(itemObject)
    .subscribe(res => {
      this.refreshProject()
    })
  }

  moveItem(itemObject, container) {
    itemObject.container = container
    this.apiService.moveItem(itemObject)
    .subscribe(res => {
      this.refreshProject()
    })
  }

  deleteItem(itemObject, container) {
    itemObject.container = container
    this.apiService.deleteItem(itemObject)
    .subscribe(res => {
      this.refreshProject()
    })
  }

}
