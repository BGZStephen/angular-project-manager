import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service"
import { FlashMessagesService } from "angular2-flash-messages"
import { Router } from "@angular/router"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private apiSevice: ApiService, private flashMessage: FlashMessagesService, private router: Router) { }

  ngOnInit() {
  }

  registerUser(usreObject){
      this.apiSevice.registerUser(usreObject)
      .subscribe(res => {
        console.log(res)
        if(res.success) {
          this.flashMessage.show('Registration Successful', {cssClass: "message-success", timeout: 3000})
        }
        this.router.navigate(['/login'])
      })
  }

}
