
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {SocialUser, SocialAuthService} from 'angularx-social-login';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

  constructor( private router: Router, private socialAuthService: SocialAuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Promise<boolean>  {

    const result = this.returnUserDetails();
    if (!result) {
      this.router.navigate(['/auth']);
    }

    return result;

  }

  
  async returnUserDetails() {
    const value = await localStorage.getItem('user') ;
    if (value === null) {
      this.router.navigate(['/auth']);
      return false;
    } else {
      return true;
    }
  }

}

