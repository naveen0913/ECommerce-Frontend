import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SigninService } from './signin.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(private signservice:SigninService, private router: Router) { }

  canActivate(): boolean {
    if (this.signservice.isLoggedIn) {
      return true;
    } else {
      return false;
    }
  }
}
