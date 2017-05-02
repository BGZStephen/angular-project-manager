import { Component, OnInit } from '@angular/core';
import { UserApiService } from "../../services/user-api.service"
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userApiService: UserApiService) { }

  profile: object;

  ngOnInit() {
    this.userApiService.getUserProfile()
    .subscribe(res => {
      this.profile = res
    })
  }

}
