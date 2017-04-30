import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service"

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  addProject(projectObject) {
    this.apiService.addProject(projectObject)
    .subscribe(res => {
      console.log(res)
    })
  }
}
