import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import "rxjs/Rx"

@Injectable()
export class ApiService {

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
}
