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

  registerUser(usreObject){
      this.userApiService.registerUser(usreObject)
      .subscribe(res => {
        console.log(res)
        if(res.success) {
          this.flashMessage.show('Registration Successful', {cssClass: "message-success", timeout: 3000})
        }
        this.router.navigate(['/login'])
      })
  }

}
