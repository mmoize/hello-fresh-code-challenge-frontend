import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  user:any;

  constructor() { }

  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  

}
