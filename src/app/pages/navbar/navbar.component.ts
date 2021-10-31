import { Component, OnInit } from '@angular/core';
import { AuthenticationComponent } from 'src/app/authentication/authentication.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authcomp:AuthenticationComponent) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.authcomp.logOut()
    
  }

}
