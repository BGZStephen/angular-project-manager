import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service"
import "rxjs/Rx"

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private apiSevice: ApiService) {
  }

  getAllUsers() {
    this.apiSevice.getAllUsers()
    .subscribe(res => {
      console.log(res)
    })
  }

  getUserById(id) {
    let query = {userId: id}
    this.apiSevice.getUserById(query)
    .subscribe(res => {
      console.log(res)
    })
  }

  deleteUser(id) {
    let query = {userId: id}
    this.apiSevice.deleteUser(query)
    .subscribe(res => {
      console.log(res)
    })
  }

  ngOnInit() {
  }

}
