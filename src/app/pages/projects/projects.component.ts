import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  projectVisible: boolean = false;

  ngOnInit() {
  }

  toggleProjectVisibility() {
    if (this.projectVisible == false) {
      return {"max-height": "0", "height": "0"}
    } else {
      return {"max-height": "9000px", "height": "auto"}
    }
  }

}
