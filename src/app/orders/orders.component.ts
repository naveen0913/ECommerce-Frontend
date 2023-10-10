import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { JsonPipe } from '@angular/common';
import { SigninService } from '../signin.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders:any[]=[]
  user:any;
  constructor(private http:HttpClient,private productserice:ProductService,private signinservice:SigninService){
    this.signinservice.isUserLoggedIN
    this.signinservice.isLoggedIn

  }
  ngOnInit(): void {

    var orderuserId=localStorage.getItem("loggedInuserKey")
    console.log(orderuserId);

    orderuserId && this.productserice.getAllorders(orderuserId).subscribe((data)=>{
      this.orders=data
      console.log("orders placed",data);
      
    })

    this.user=localStorage.getItem("loggedInuserKey")
    console.log(this.user);
  }

  deleteOrder(id:string):void{
    this.productserice.deleteorder(id).subscribe((data)=>{
      console.log("order deleted Successfully",data);
      alert("order deleted")
    })
  }

  get loggedInuser(){
    return this.signinservice.isLoggedIn
   }

  logout():void{
    this.signinservice.userLogout();
    console.log(`user with ${this.user} loggedout successfully`);
  }
}
