import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import "rxjs/Rx"

@Injectable()
export class ProjectApiService {

  user: any;

  constructor(private http: Http) { }

  addProject(projectObject) {
    let user = JSON.parse(localStorage.getItem('user'))
    projectObject.userId = user.userId
    return this.http.post("http://localhost:3000/project/add", projectObject)
    .map(res => res.json())
  }

  updateProject(projectObject) {
    return this.http.post("http://localhost:3000/project/update", projectObject)
    .map(res => res.json())
  }

  getProjectsByUser() {
    let user = JSON.parse(localStorage.getItem('user'))
    let projectObject = {userId: user.userId}
    return this.http.post("http://localhost:3000/project/user", projectObject)
    .map(res => res.json())
  }

  getProjectById(query) {
    return this.http.post("http://localhost:3000/project/id", query)
    .map(res => res.json())
  }

  addProjectItem(itemObject) {
    return this.http.post("http://localhost:3000/project/createItem", itemObject)
    .map(res => res.json())
  }

  moveItem(itemObject) {
    return this.http.post("http://localhost:3000/project/moveItem", itemObject)
    .map(res => res.json())
  }

  deleteItem(itemObject) {
    return this.http.post("http://localhost:3000/project/deleteItem", itemObject)
    .map(res => res.json())
  }

  deleteProject(projectObject) {
    return this.http.post("http://localhost:3000/project/delete", projectObject)
    .map(res => res.json())
  }

}
