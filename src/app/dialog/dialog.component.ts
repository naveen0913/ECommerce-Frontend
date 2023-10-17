import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SigninService } from '../signin.service';
import { Product } from '../product.model';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  

  cartItems:any[]=[]
  cartitem:any;
  user1:any;
  id:any;
  products:Product[]=[]
  constructor(private http:HttpClient,
    private productservice:ProductService,
    private signinservice:SigninService,
    @Inject(MAT_DIALOG_DATA) public data:DialogComponent ) 
  {
    this.signinservice.isUserLoggedIN
    this.signinservice.isLoggedIn
  }
  
  
  ngOnInit(): void {
   
    console.log("deleted data",this.data);
    this.cartitem=this.data
    console.log(this.cartitem.id);
    this.deleteCartItem
    var user=localStorage.getItem("loggedInuserKey")
    console.log("user data will appear",user);
    this.user1=Number(user);
    console.log("user will appear",this.user1);
  }
  
deleteCartItem(_id:string):void{
  this.productservice.deleteCartItem(_id).subscribe(()=>{
    this.cartItems=this.cartItems.filter((item)=>item.id!==_id)
    console.log("deleted item",this.cartitem);
    window.location.reload()

  })
}
addItemtoWishlist(_userid:any,_id:any):void{
  this.productservice.addItemToWishList(this.user1,_id).subscribe((res)=>{

    if(res.ok===false && this.user1===0){
      alert("login first")
   }else{
     alert("Product added to Wishlist")
     console.log("product added",res);
     window.location.reload()
   }
   },
   (error)=>{
     if (error.status === 401) {
       alert("Unauthorized: You need to log in to add items to your wishlist.");
     } else {
       alert("Item already present in the Wishlist");
     }
     console.error("Error adding product to wishlist:", error);
   }
  )
}

}