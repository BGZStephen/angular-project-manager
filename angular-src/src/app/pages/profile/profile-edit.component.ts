import { Component, OnInit } from '@angular/core';
import { UserApiService } from "../../services/user-api.service"
import { FlashMessagesService } from "angular2-flash-messages"
import { Router } from "@angular/router"

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  constructor(private userApiService: UserApiService, private flashMessage: FlashMessagesService, private router: Router) { }

  profile: object;

  ngOnInit() {
    this.userApiService.getUserProfile()
    .subscribe(res => {
      this.profile = res
    })
  }

  updateProfile(userObject) {
    let user = JSON.parse(localStorage.getItem('user'))
    userObject.userId = user.userId
    this.userApiService.getUserByEmail(userObject)
    .subscribe(res => {
      if(res.userId != userObject.userId) { // test if the user changing the email has the same ID as the current owner of the email. Allowing users to not be blocked from updating name because email exists
        this.flashMessage.show('Email already exists', {cssClass: "message-failure", timeout: 3000})
      } else {
        this.userApiService.updateProfile(userObject)
        .subscribe(res => {
          console.log(res)
          if(res.success) {
            this.flashMessage.show('Update Successful', {cssClass: "message-success", timeout: 3000})
          }
          this.router.navigate(['/profile'])
        })
      }
    })
  }

}
