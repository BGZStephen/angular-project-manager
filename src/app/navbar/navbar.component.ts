import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuVisible: boolean = false

  constructor() { }

  ngOnInit() {
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

}
