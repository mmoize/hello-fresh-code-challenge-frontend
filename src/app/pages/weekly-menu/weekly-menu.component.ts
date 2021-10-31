import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
import { MediaChange } from '@angular/flex-layout';
import { MediaObserver } from '@angular/flex-layout';
import { DataserviceService } from 'src/app/core/dataservice.service';

 

@Component({
  selector: 'app-weekly-menu',
  templateUrl: './weekly-menu.component.html',
  styleUrls: ['./weekly-menu.component.scss']
})
export class WeeklyMenuComponent implements OnInit {

  @ViewChild('grid') grid!: MatGridList;


  openRecipeDetail = false;
  recipeDetailData:any;

  week_number = 0

  currentlyDisplayedMenu: any;
  WeekData_Display:any;
  dateDisplayDays:any;
  dateDisplayMonth:any;
  dateDisplayYear:any;

  menuDate:any;

  gridByBreakpoint: any = {
    xl: 6,
    lg: 5,
    md: 4,
    sm: 3,
    xs: 2
  }

  WeeklyMenuData:any;

  constructor(
    private observableMedia:  MediaObserver,
    private dataService:DataserviceService, 
    private http: HttpClient) { 

    }

  ngOnInit(): void {

    setTimeout(() => 
    this.dataService.getUserWeeklyData().subscribe(resData => {
      this.WeeklyMenuData = resData
      this.currentlyDisplayedMenu = this.WeeklyMenuData[this.week_number]
      this.getDate(this.currentlyDisplayedMenu.week_date)
      this. WeeklyNumberOfMeals()
    })
    , 1000);
  }


  ngAfterContentInit() {
    this.observableMedia.asObservable().subscribe((change:MediaChange[]) => {
      console.log('its media change', change)
      this.grid.cols = this.gridByBreakpoint[change[change.length-1].mqAlias];
    });
  }


  getDate(value:any){
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const temp_date = value.split("-");
      const data =  temp_date[2] + " " + months[Number(temp_date[1]) - 1] + " " + temp_date[0];
      
      this.WeekData_Display = data
      const dateList = this.WeekData_Display.split(" ")
      this.dateDisplayDays = dateList[0]
      this.dateDisplayMonth = dateList[1]
      this.dateDisplayYear = dateList[2]
  }


  onClickDisplayNextMenu() {
    this.onMenuSwitched() // Resets activted buttons

    if (this.week_number <= 52) {
      this.week_number +=1
    } else {
      this.week_number = 0
    }
    
    this.currentlyDisplayedMenu = this.WeeklyMenuData[this.week_number]
    this.getDate(this.currentlyDisplayedMenu.week_date)
  }

  onClickDisplayPreviousMenu() {
    this.onMenuSwitched() // Resets activted buttons
    this.week_number -=1
    this.currentlyDisplayedMenu = this.WeeklyMenuData[this.week_number]
    this.getDate(this.currentlyDisplayedMenu.week_date)
  }



  onChangeNoofMeals(event:Event, value:any) {

    this.dataService.onChangeNoOfMeals(this.currentlyDisplayedMenu, value);

    let btn3 = document.getElementById('btn3')

    let btn4 = document.getElementById('btn4')
    
    let btn5 = document.getElementById('btn5')

    const clickedlementID = (<HTMLElement>event.currentTarget).id 
    
    //Activates a button after choosing the amount of meals per week 
    switch(clickedlementID){
      case 'btn3':
        btn3?.classList.remove("num-meals-btn") 
        btn3?.classList.add('num-meals-btn-Clicked')

        btn4?.classList.remove("num-meals-btn-Clicked")
        btn5?.classList.remove("num-meals-btn-Clicked")
        btn4?.classList.add('num-meals-btn')
        btn5?.classList.add('num-meals-btn')
        break
      case'btn4':
        btn4?.classList.remove("num-meals-btn") 
        btn4?.classList.add('num-meals-btn-Clicked')

        btn3?.classList.remove("num-meals-btn-Clicked")
        btn5?.classList.remove("num-meals-btn-Clicked")
        btn3?.classList.add('num-meals-btn')
        btn5?.classList.add('num-meals-btn')
        break
      case 'btn5':
        btn5?.classList.remove("num-meals-btn") 
        btn5?.classList.add('num-meals-btn-Clicked')
        
        btn4?.classList.remove("num-meals-btn-Clicked")
        btn3?.classList.remove("num-meals-btn-Clicked")
        btn4?.classList.add('num-meals-btn')
        btn3?.classList.add('num-meals-btn')
        break
    }
  }


  WeeklyNumberOfMeals () {
    const mealsPerWeek =   this.currentlyDisplayedMenu.weelkly_recipe_amount

    let btn3 = document.getElementById('btn3')

    let btn4 = document.getElementById('btn4')
    
    let btn5 = document.getElementById('btn5')

    
    //Activates a button after loading the weekly menu
    switch(mealsPerWeek){
      case 3:
        btn3?.classList.remove("num-meals-btn") 
        btn3?.classList.add('num-meals-btn-Clicked')

        btn4?.classList.remove("num-meals-btn-Clicked")
        btn5?.classList.remove("num-meals-btn-Clicked")
        btn4?.classList.add('num-meals-btn')
        btn5?.classList.add('num-meals-btn')
        break
      case 4:
        btn4?.classList.remove("num-meals-btn") 
        btn4?.classList.add('num-meals-btn-Clicked')

        btn3?.classList.remove("num-meals-btn-Clicked")
        btn5?.classList.remove("num-meals-btn-Clicked")
        btn3?.classList.add('num-meals-btn')
        btn5?.classList.add('num-meals-btn')
        break
      case 5:
        btn5?.classList.remove("num-meals-btn") 
        btn5?.classList.add('num-meals-btn-Clicked')
        
        btn4?.classList.remove("num-meals-btn-Clicked")
        btn3?.classList.remove("num-meals-btn-Clicked")
        btn4?.classList.add('num-meals-btn')
        btn3?.classList.add('num-meals-btn')
        break
    }
  }

  onMenuSwitched() {

    let btn3 = document.getElementById('btn3')

    let btn4 = document.getElementById('btn4')
    
    let btn5 = document.getElementById('btn5')

    btn3?.classList.remove("num-meals-btn-Clicked")
    btn3?.classList.add('num-meals-btn')

    btn4?.classList.remove("num-meals-btn-Clicked")
    btn4?.classList.add('num-meals-btn')

    btn5?.classList.remove("num-meals-btn-Clicked")
    btn5?.classList.add('num-meals-btn')

  }


  openRecipeDetails(data:any) {
    this.openRecipeDetail= true
    this.recipeDetailData = data;

  }

  closeRecipeDetail(data:any) {
    this.openRecipeDetail = data;
  }


}
