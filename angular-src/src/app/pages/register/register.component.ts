import { Component, OnInit } from '@angular/core';
import { UserApiService } from "../../services/user-api.service"
import { FlashMessagesService } from "angular2-flash-messages"
import { Router } from "@angular/router"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userApiService: UserApiService, private flashMessage: FlashMessagesService, private router: Router) { }

  ngOnInit() {
  }

  registerUser(userObject){
    this.userApiService.getUserByEmail(userObject)
    .subscribe(res => {
      if(res) {
        this.flashMessage.show('Email already exists', {cssClass: "message-failure", timeout: 3000})
      } else {
        this.userApiService.getUserByUsername(userObject)
        .subscribe(res => {
          if(res) {
            this.flashMessage.show('Username already exists', {cssClass: "message-failure", timeout: 3000})
          } else {
            this.userApiService.registerUser(userObject)
            .subscribe(res => {
              console.log(res)
              if(res.success) {
                this.flashMessage.show('Registration Successful', {cssClass: "message-success", timeout: 3000})
              }
              this.router.navigate(['/login'])
            })
          }
        })
      }
    })
  }
}
