import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service"

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectVisible: boolean = false;
  projects: Array<object>;

  constructor(private firebaseService: FirebaseService) {
    this.firebaseService.getProjects()
    .subscribe(res => {
      this.projects = res;
      console.log(this.projects)
    })
  }

  ngOnInit() {
  }

  toggleProjectVisibility() {
    if (this.projectVisible == false) {
      return {"height": "0"}
    } else {
      return {"height": "auto"}
    }
  }

}
