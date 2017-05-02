import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import "rxjs/Rx"

@Injectable()
export class ProjectApiService {

  user: any;
  port: 3001;

  constructor(private http: Http) { }

  addProject(projectObject) {
    let user = JSON.parse(localStorage.getItem('user'))
    projectObject.userId = user.userId
    return this.http.post("http://localhost:3001/project/add", projectObject)
    .map(res => res.json())
  }

  updateProject(projectObject) {
    return this.http.post("http://localhost:3001/project/update", projectObject)
    .map(res => res.json())
  }

  getProjectsByUser() {
    let user = JSON.parse(localStorage.getItem('user'))
    let projectObject = {userId: user.userId}
    return this.http.post("http://localhost:3001/project/user", projectObject)
    .map(res => res.json())
  }

  getProjectById(query) {
    return this.http.post("http://localhost:3001/project/id", query)
    .map(res => res.json())
  }

  addProjectItem(itemObject) {
    return this.http.post("http://localhost:3001/project/createItem", itemObject)
    .map(res => res.json())
  }

  moveItem(itemObject) {
    return this.http.post("http://localhost:3001/project/moveItem", itemObject)
    .map(res => res.json())
  }

  deleteItem(itemObject) {
    return this.http.post("http://localhost:3001/project/deleteItem", itemObject)
    .map(res => res.json())
  }

  deleteProject(projectObject) {
    return this.http.post("http://localhost:3001/project/delete", projectObject)
    .map(res => res.json())
  }

}
