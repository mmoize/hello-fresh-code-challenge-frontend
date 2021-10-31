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

  week_number = 0

  currentlyDisplayedMenu: any;
  WeekData_Display:any;

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
      console.log(this.currentlyDisplayedMenu)
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
      console.log(this.WeekData_Display)
  }


  onClickDisplayNextMenu() {
    this.week_number +=1
    this.currentlyDisplayedMenu = this.WeeklyMenuData[this.week_number]
  }

  onClickDisplayPreviousMenu() {
    this.week_number -=1
    this.currentlyDisplayedMenu = this.WeeklyMenuData[this.week_number]
  }

}
