import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service"
import { Router } from "@angular/router"
import { FlashMessagesService } from "angular2-flash-messages"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  login(loginObject) {
    this.apiService.authenticate(loginObject)
    .subscribe(res => {
      if(res.success) {
        this.apiService.storeUserData(res.token, res.user)
        this.flashMessage.show('Login successful', {cssClass: "message-success", timeout: 1000})
        this.router.navigate(['/projects'])
      } else {
        this.flashMessage.show('Incorrect username or password', {cssClass: "message-failure", timeout: 1500})
      }
    })
  }

}
