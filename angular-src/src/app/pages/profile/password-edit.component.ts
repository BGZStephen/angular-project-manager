import { Component, OnInit } from '@angular/core';
import { UserApiService } from "../../services/user-api.service"

@Component({
  selector: 'app-password-edit',
  templateUrl: './password-edit.component.html',
  styleUrls: ['./password-edit.component.css']
})
export class PasswordEditComponent implements OnInit {

  constructor(private userApiService: UserApiService) { }

  profile: object;

  ngOnInit() {
    this.userApiService.getUserProfile()
    .subscribe(res => {
      this.profile = res
    })
  }

  updatePassword(passwordObject) {
    this.userApiService.updatePassword(passwordObject)
    .subscribe(res => {
      console.log(res)
    })
  }

}
