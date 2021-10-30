import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { BoardComponent } from './board/board.component';
import { WeeklyMenuComponent } from './weekly-menu/weekly-menu.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    AuthenticationComponent,
    BoardComponent,
    WeeklyMenuComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
