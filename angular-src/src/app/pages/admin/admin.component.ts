import { Component, OnInit } from '@angular/core';
import { UserApiService } from "../../services/user-api.service"
import "rxjs/Rx"

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userApiService: UserApiService) {
  }

  getAllUsers() {
    this.userApiService.getAllUsers()
    .subscribe(res => {
    })
  }

  getUserById(id) {
    let query = {userId: id}
    this.userApiService.getUserById(query)
    .subscribe(res => {
    })
  }

  deleteUser(id) {
    let query = {userId: id}
    this.userApiService.deleteUser(query)
    .subscribe(res => {
    })
  }

  ngOnInit() {
  }

}
