import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service"
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  login(loginObject) {
    this.apiService.authenticate(loginObject)
    .subscribe(res => {
      if(res.success) {
        this.apiService.storeUserData(res.token, res.user)
        console.log("Login successful")
        this.router.navigate(['/projects'])
      } else {
        console.log("Unable to log in")
      }
    })
  }

}
