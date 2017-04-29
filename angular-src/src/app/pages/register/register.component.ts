import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private apiSevice: ApiService) { }

  ngOnInit() {
  }

  registerUser(usreObject){
      this.apiSevice.registerUser(usreObject)
      .subscribe(res => {
        console.log(res)
      })
  }

}
