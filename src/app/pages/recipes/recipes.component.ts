import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataserviceService } from 'src/app/core/dataservice.service';
import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  p: number = 1;



  recipeDetail = false;

  toRecipeDetail:any;

  Recipes:any;

  constructor(private dataService:DataserviceService, ) { }

  ngOnInit(): void {
    this.Recipes = this.dataService.getRecipes()
  }

  openRecipeDetail(data:any) {
    this.recipeDetail =true
    this.toRecipeDetail = data
  }

  closeRecipeDetail(value:boolean) {
    this.recipeDetail = value
  }


}
