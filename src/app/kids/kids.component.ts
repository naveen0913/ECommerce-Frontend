import { Component, OnInit } from '@angular/core';
import { SigninService } from '../signin.service';
@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {
  user: any;
  constructor(private signinservice:SigninService) {
    this.signinservice.isUserLoggedIN
    this.signinservice.isLoggedIn
  }
  ngOnInit(): void {
    this.user=this.signinservice.loggedInUser()
    this.user=localStorage.getItem("loggedInuserKey");
    console.log("logged in user",this.user);
  }
   logout():void{
    this.signinservice.userLogout();
    console.log(`user with ${this.user} loggedout successfully`);
  }
}
