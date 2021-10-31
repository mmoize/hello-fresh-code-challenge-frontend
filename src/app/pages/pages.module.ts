import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeeklyMenuComponent } from './weekly-menu/weekly-menu.component';
import { BoardComponent } from './board/board.component';
import { RecipesComponent } from './recipes/recipes.component';
import { Pagesroutes } from './pages.routing';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { SharedComponent } from '../shared/shared.component';
import { SharedModule } from '../shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';






@NgModule({
  declarations: [
    WeeklyMenuComponent,
    BoardComponent,
    RecipesComponent,
    RecipeCardComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Pagesroutes),
    AngularMaterialModule,
    FlexLayoutModule,
    SharedModule,
    MatGridListModule



  ],
 schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule { }
