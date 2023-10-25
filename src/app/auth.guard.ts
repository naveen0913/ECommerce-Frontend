import { Injectable } from '@angular/core';
import { SigninService } from './signin.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private signservice:SigninService) { }
  canActivate(): boolean {
    if (this.signservice.isLoggedIn) {
      return true;
    } else {
      return false;
    }
  }
}
