import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Output() ReturnToRecipes= new EventEmitter<boolean>();

  @Output() ReturnToMenu= new EventEmitter<boolean>();


  @Input() recipeDetail:any;

  @Input() recipeDetailFromMenu:any;

  constructor() { }

  ngOnInit(): void {
  }

  returnToRecipe() {
    this.ReturnToRecipes.emit(false)
   }

   returnToMenu() {
    this.ReturnToMenu.emit(false)
   }


}
