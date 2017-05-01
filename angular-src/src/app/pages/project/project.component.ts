import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { ApiService } from "../../services/api.service"

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: object;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {

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
        console.log(res)
        this.project = res
      })
    })
  }

  addItem(itemObject) {
    this.apiService.addProjectItem(itemObject)
    .subscribe(res => {
      console.log(res)
      this.refreshProject()
    })
  }

  moveItem(itemObject, container) {
    itemObject.container = container
    this.apiService.moveItem(itemObject)
    .subscribe(res => {
      console.log(res)
      this.refreshProject()
    })
  }

  deleteItem(itemObject, container) {
    itemObject.container = container
    this.apiService.deleteItem(itemObject)
    .subscribe(res => {
      console.log(res)
      this.refreshProject()
    })
  }

}
