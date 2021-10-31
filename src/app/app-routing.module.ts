import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PagesComponent } from './pages/pages.component';



const routes: Routes = [
  {
    path: "",
    redirectTo: "pages",
    pathMatch: "full"
  },

  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "",
        loadChildren: () => import ("./pages/pages.module").then(m => m.PagesModule), canActivate: [AuthGuard]
      },
    ]
  },
  {
    path: "auth",
    component: AuthenticationComponent,
    children: [
      {
        path: "",
        loadChildren: () => import ("./authentication/authentication.module").then(m => m. AuthenticationModule)
      }
    ]
  },
  {
    path: "**",
    redirectTo: "pages"
  }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
