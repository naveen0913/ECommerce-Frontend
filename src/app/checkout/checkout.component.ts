import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { SigninService } from '../signin.service';
import { BagDialogComponent } from '../bag-dialog/bag-dialog.component';
import {  MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  wishListItems:any[]=[]
  item:any=[]
  user:any;
  searchtext:any;
  constructor(private http:HttpClient,private productservice:ProductService,
    private route:ActivatedRoute,
    private signinservice:SigninService,
    private dialog:MatDialog,
    ) {
    this.signinservice.isUserLoggedIN
    this.signinservice.isLoggedIn
  }
  ngOnInit(): void {

    var wishlistuserId=localStorage.getItem("loggedInuserKey")
    console.log(wishlistuserId);
    
    //let userId=this.route.snapshot.paramMap.get('userid')
    //console.log(userId);
    
    wishlistuserId && this.productservice.getAllWishListItems(wishlistuserId).subscribe((items)=>{
      this.wishListItems=items
      console.log("WishList items",items);
    })

    this.user=localStorage.getItem("loggedInuserKey")
    console.log(this.user);
    
  }

  get loggedInuser(){
    return this.signinservice.isLoggedIn
   }
  
  deleteWishListItem(id:string):void{

    this.productservice.deleteWishlistitem(id).subscribe((res)=>{
      console.log("deleted successfully",res);
      
    })
  }

  logout():void{
    this.signinservice.userLogout();
    console.log(`user with ${this.user} loggedout successfully`);
  }

  openBagDialog(item:any,enterAnimationDuration: string, exitAnimationDuration: string): void { 
    console.log("Item data",item);     
    this.dialog.open(BagDialogComponent,{
      width:'400px',
      height:'390px',
      enterAnimationDuration,
      exitAnimationDuration,
      data:item,
    })
  }


}

