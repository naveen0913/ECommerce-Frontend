import { Component, OnInit } from '@angular/core';
import { SigninService } from '../signin.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit{
  user: any;
  productservice: any;

  constructor( private signinservice:SigninService){
    this.signinservice.isUserLoggedIN
    this.signinservice.isLoggedIn
  }

  ngOnInit(): void {

    this.user=localStorage.getItem("loggedInuserKey")
    this.user=this.signinservice.loggedInUser()
    this.user=localStorage.getItem("loggedInuserKey");
    console.log("logged in user",this.user);
    
    
  }

  get loggedInuser(){
    return this.signinservice.isLoggedIn
   }

   logout():void{
    this.signinservice.userLogout();
    console.log(`user with ${this.user} loggedout successfully`);
  }

}
