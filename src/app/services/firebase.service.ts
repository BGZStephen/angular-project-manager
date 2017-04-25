import { Injectable } from '@angular/core';
import { AngularFire } from "angularfire2"

@Injectable()
export class FirebaseService {

  constructor(private af: AngularFire) { }

  getProjects() {
    let projects = this.af.database.list('/projects');
    return projects
  }

  addProject(projectObject) {
    let projects = this.af.database.list('/projects');
    projects.push(projectObject);
  }

}
