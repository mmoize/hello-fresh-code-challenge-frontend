import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Input() weeklyMenu:any;

  @Input() recipe:any;

  constructor() { }

  ngOnInit(): void {

  }

}
