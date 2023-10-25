import { Component, Inject, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SigninService } from '../signin.service';
import { Product } from '../product.model';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  cartItems:any;
  cartItem:any;
  user1:any;
  id:any;
  products:Product[]=[]
  durationInSeconds=6;
  constructor(private productservice:ProductService,private signinservice:SigninService,@Inject(MAT_DIALOG_DATA) public data:DialogComponent,private snackbar:MatSnackBar ) 
  {
    this.signinservice.isUserLoggedIN
    this.signinservice.isLoggedIn
  }
  ngOnInit(): void {
    console.log("deleted data",this.data);
    this.cartItem=this.data
    console.log(this.cartItem.id);
    this.deleteCartItem
    var user=localStorage.getItem("loggedInuserKey")
    console.log("user data will appear",user);
    this.user1=Number(user);
    console.log("user will appear",this.user1);
  }
deleteCartItem(_id:string):void{
  this.productservice.deleteCartItem(_id).subscribe(()=>{
    console.log("deleted item",this.cartItem);
    window.location.reload()
  })
}
addItemtoWishlist(_userid:any,_id:any):void{
  this.productservice.addItemToWishList(this.user1,_id).subscribe((res)=>{
    if(res.ok===false && this.user1===0){
      this.snackbar.open("Login to add Item to WishList",'close',{
        duration:this.durationInSeconds*1000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      })
   }else{
     console.log("product added",res);
     this.snackbar.open("Item Added to Wishlist",'close',{
      duration:this.durationInSeconds*1000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    })
     window.location.reload()
   }
   },
   (error)=>{
    this.snackbar.open("Error occured",'close',{
      duration:this.durationInSeconds*1000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    })
    console.error("Error adding product to wishlist:", error);
   }
  )
}
}