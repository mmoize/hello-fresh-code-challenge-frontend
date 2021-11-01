import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {GoogleLoginProvider,SocialUser, SocialAuthService} from 'angularx-social-login';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  isLoggedin!: boolean;
  form!: FormGroup;
  socialUser!: SocialUser;

  signup = false;
  

  constructor(
    private router: Router,
    private formBuilder: FormBuilder, 
    private socialAuthService: SocialAuthService
  ) { }

  ngOnInit(): void {
    
    this.form = new FormGroup({
      email: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      firstName: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      password: new FormControl(null, {
        updateOn: 'change',
        validators: []
      }),
    });   
    
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      if (this.isLoggedin) {
        this.router.navigate(['/board'])
      }
     
      localStorage.setItem('user', JSON.stringify(this.socialUser));
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(res => {
      this.router.navigate(['/board'])
      if (this.isLoggedin) {
        this.router.navigate(['/board'])
      }
    });
  }

  logOut(): void {
    this.socialAuthService.signOut();
    this.router.navigate(['/auth'])
    localStorage.removeItem('user');
  }

  onSignUP() {
    this.signup = true;
  }

  onLogin() {
    this.signup =false;
  }

  onSubmit() {



    if (!this.form.value.password) {
      return;
    } else {
      const email =  this.form.value.email;
      const password =  this.form.value.password;
      
      const user = {
        firstName:email,
      }
  
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/board'])
    }

  }


  onSubmitSignup() {


    if (!this.form.value.password) {
      return;
    }
    const name =  this.form.value.firstName;
    const email =  this.form.value.email;
    const password =  this.form.value.password;

    
    const user = {
      firtsName:name,
      email:email
    }

    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/board'])

  }


}
