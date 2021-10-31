import { Component } from '@angular/core';
import { DataserviceService } from './core/dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-fresh-challenge-frontend';


  constructor(
    private dataService:DataserviceService, ) { 

    }

    
  ngOnInit(): void {
      this.dataService.loadWeeklyMenu()
      this.dataService.getRecipes()
   }


}
