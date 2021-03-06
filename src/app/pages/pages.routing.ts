import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BoardComponent } from "./board/board.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { WeeklyMenuComponent } from "./weekly-menu/weekly-menu.component";
import { PagesComponent } from './pages.component';



export const Pagesroutes: Routes = [
  { path: '', redirectTo: 'board', pathMatch: 'full' },
  {  path: "board", component: BoardComponent },
  { path: "weekly-menu", component: WeeklyMenuComponent },
  { path: "recipes", component: RecipesComponent },

  
    ];



