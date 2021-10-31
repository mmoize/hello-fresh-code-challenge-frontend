import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor() { }

  ngOnInit(): void {
    
  }

  closeNav() {
    this.sidenav.close();
  }

  logout() {
    localStorage.removeItem('user');
  }


}
