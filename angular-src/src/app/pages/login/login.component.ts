import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  login(loginObject) {
    this.apiService.authenticate(loginObject)
    .subscribe(res => {
      if(res.success) {
        this.apiService.storeUserData(res.token, res.user)
        console.log("Login successful")
      } else {
        console.log("Unable to log in")
      }
    })
  }

}
