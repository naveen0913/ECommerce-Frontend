import {  Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { SigninService } from '../signin.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any;
  constructor(private signinservice:SigninService){
    this.signinservice.isUserLoggedIN
    this.signinservice.isLoggedIn
  }
  ngOnInit(): void { 
    this.user=localStorage.getItem("loggedInuserKey")
    console.log("logged in user",this.user);
  }
  logout():void{
    this.signinservice.userLogout();
    console.log(`user with ${this.user} loggedout successfully`);
  }
}
