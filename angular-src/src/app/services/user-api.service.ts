import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import { tokenNotExpired } from "angular2-jwt"
import "rxjs/Rx"

@Injectable()
export class UserApiService {

  authToken: any;
  user: any;
  port: 3001;

  constructor(private http: Http) { }

  getAllUsers() {
    return this.http.post("http://localhost:3001/users/getallusers", {})
    .map(res => res.json())
  }

  getUserById(query) {
    return this.http.post("http://localhost:3001/users/getbyid", query)
    .map(res => res.json())
  }

  getUserProfile() {
    let user = JSON.parse(localStorage.getItem('user'))
    let userObject = {'userId': user.userId}
    return this.http.post("http://localhost:3001/users/getbyid", userObject)
    .map(res => res.json())
  }

  updateProfile(userObject) {
    let user = JSON.parse(localStorage.getItem('user'))
    userObject.userId = user.userId
    return this.http.post("http://localhost:3001/users/updateuser", userObject)
    .map(res => res.json())
  }

  getUserByUsername(query) {
    return this.http.post("http://localhost:3001/users/getbyusername", query)
    .map(res => res.json())
  }

  getUserByEmail(query) {
    return this.http.post("http://localhost:3001/users/getbyemail", query)
    .map(res => res.json())
  }

  deleteUser(query) {
    return this.http.post("http://localhost:3001/users/deleteuser", query)
    .map(res => res.json())
  }

  registerUser(userObject) {
    return this.http.post("http://localhost:3001/users/register", userObject)
    .map(res => res.json())
  }

  authenticate(loginObject) {
    return this.http.post("http://localhost:3001/users/authenticate", loginObject)
    .map(res => res.json())
  }

  updatePassword(passwordObject) {
    let user = JSON.parse(localStorage.getItem('user'))
    passwordObject.userId = user.userId
    return this.http.post("http://localhost:3001/users/updatepassword", passwordObject)
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

}
