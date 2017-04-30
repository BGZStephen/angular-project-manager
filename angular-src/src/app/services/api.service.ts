import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import { tokenNotExpired } from "angular2-jwt"
import "rxjs/Rx"

@Injectable()
export class ApiService {

  authToken: any;
  user: any;

  constructor(private http: Http) { }

  getAllUsers() {
    return this.http.post("http://localhost:3000/users/getallusers", {})
    .map(res => res.json())
  }

  getUserById(query) {
    return this.http.post("http://localhost:3000/users/getbyid", query)
    .map(res => res.json())
  }

  deleteUser(query) {
    return this.http.post("http://localhost:3000/users/deleteuser", query)
    .map(res => res.json())
  }

  registerUser(userObject) {
    return this.http.post("http://localhost:3000/users/register", userObject)
    .map(res => res.json())
  }

  authenticate(loginObject) {
    return this.http.post("http://localhost:3000/users/authenticate", loginObject)
    .map(res => res.json())
  }

  storeUserData(token, user) {
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))
    this.authToken = token;
    this.user = user;
  }

  loggedIn() {
    return tokenNotExpired();
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  addProject(projectObject) {
    let user = JSON.parse(localStorage.getItem('user'))
    projectObject.userId = user.userId
    console.log(projectObject)
    return this.http.post("http://localhost:3000/project/add", projectObject)
    .map(res => res.json())
  }
}
