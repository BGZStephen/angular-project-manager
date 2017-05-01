import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api.service"
import { Router } from "@angular/router"
import { FlashMessagesService } from "angular2-flash-messages"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuVisible: boolean = false

  constructor(private apiService: ApiService, private router: Router, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  menuToggle() {
    if(screen.width < 768) {
      this.menuVisible = !this.menuVisible
    }
  }

  toggleVisibility(resize?) {
    if(resize && screen.width < 768) {
      this.menuVisible = false;
      return {"visibility": "hidden", "opacity": "0"}
    } else if (screen.width >= 768) {
      this.menuVisible = true;
      return {"visibility": "visible", "opacity": "1"}
    } else if (this.menuVisible == true) {
      return {"visibility": "visible", "opacity": "1"}
    } else {
      return {"visibility": "hidden", "opacity": "0"}
    }
  }

  logout() {
    this.apiService.logout()
    this.flashMessage.show('Logout Successful', {cssClass: "message-success", timeout: 3000})
    this.router.navigate(['/'])
  }

}
