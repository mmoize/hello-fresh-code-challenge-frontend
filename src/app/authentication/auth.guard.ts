
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



  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  //   return this.socialAuthService.authState.pipe(
  //     map((socialUser: SocialUser) => !!socialUser),
  //     tap((isLoggedIn: boolean) => {
  //       if (!isLoggedIn) {
  //         this.router.navigate(['login']);
  //       }
  //     })
  //   );
  // }
  

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Promise<boolean>  {

    let url: string = state.url;
    const result = this.returnUserDetails();

    if (!result) {
      this.router.navigate(['/login']);
    }

    return result;

    }

    

    async returnUserDetails() {
     const value = await localStorage.getItem('user') ;
      if (value === null) {
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    }

}

