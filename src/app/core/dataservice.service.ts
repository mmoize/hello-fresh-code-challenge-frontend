import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, empty, Observable } from 'rxjs';
import { Recipe } from '../shared/recipe.model';
import { weekMenuData } from '../shared/week-menu.modal';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  Recipes!:Recipe;
  weeklyMenuData!: weekMenuData;
  private weeklyMenuData$  = new BehaviorSubject<weekMenuData>(this.weeklyMenuData)
 

  constructor(private http: HttpClient) { }


  loadWeeklyMenu() {
    return this.http.get("assets/weeklymenu-data.json").subscribe((resdata:any) => {
      this.weeklyMenuData = resdata
      this.weeklyMenuData$.next(this.weeklyMenuData)
    })
  }

  loadAllRecipes(){
    return this.http.get("assets/recipe-list-data.json").subscribe((resdata:any) => {
      this.Recipes = resdata
    })
  }

  getUserWeeklyData() {
    return this.weeklyMenuData$.asObservable();
  }

  getRecipes(){
    return this.shuffle(this.Recipes); 
  }


  onChangeNoOfMeals(data:any, value:any) {
    
    for (let week in this.weeklyMenuData) {
      
      if (week == data) {
      }

    }
  }

  // Shuffling the recipes array
  shuffle(array:any) {
    let currentIndex = array.length,  randomIndex;
  
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }



  





}






