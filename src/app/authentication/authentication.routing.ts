import { Routes } from "@angular/router";
import { LogInComponent } from "./log-in/log-in.component";
import { RegisterComponent } from "./register/register.component";




export const AuthenticationRoutes: Routes = [
    { path: "login", component: LogInComponent },
    { path: "signup", component: RegisterComponent },
]