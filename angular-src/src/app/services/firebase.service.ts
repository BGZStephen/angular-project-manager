import { Injectable } from '@angular/core';
import { AngularFire } from "angularfire2"

@Injectable()
export class FirebaseService {

  constructor(private af: AngularFire) { }

  getProjects() {
    let projects = this.af.database.list('/projects');
    return projects
  }

  deleteIncompleteItem(projectKey, itemIndex) {
    console.log(projectKey, itemIndex)
    this.af.database.list('/projects/' + projectKey + "/incompleteItems/0/").remove()
  }

  deleteCompletedItem(projectKey, itemIndex) {
    this.af.database.object('/projects/' + projectKey + "/completedItems/" + itemIndex)
  }

  addProject(projectObject, taskArray) {
    let projectKey;
    let projects = this.af.database.list('/projects');
    projects.push(projectObject)
    .then((project) => {
        this.af.database.object('/projects/' + project.key + '/incompleteItems/').set(taskArray)
    })
  }

}
