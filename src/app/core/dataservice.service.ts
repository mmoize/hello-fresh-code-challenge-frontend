import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, empty, Observable } from 'rxjs';
import { weekMenuData } from '../shared/week-menu.modal';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  Recipes!:any;
  weeklyMenuData!: weekMenuData;
  private weeklyMenuData$  = new BehaviorSubject<weekMenuData>(this.weeklyMenuData)
 

  constructor(private http: HttpClient) { }


  loadWeeklyMenu() {
    return this.http.get("assets/weeklymenu-data.json").subscribe((resdata:any) => {
      this.weeklyMenuData = resdata
      this.weeklyMenuData$.next(this.weeklyMenuData)
      console.log("loaded", resdata)
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
    return this.Recipes
  }



  





}






