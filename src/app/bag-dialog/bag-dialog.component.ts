import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../product.service';
import { CheckoutComponent } from '../checkout/checkout.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddBagSnackbar1Component } from '../add-bag-snackbar1/add-bag-snackbar1.component';
@Component({
  selector: 'app-bag-dialog',
  templateUrl: './bag-dialog.component.html',
  styleUrls: ['./bag-dialog.component.css']
})
export class BagDialogComponent implements OnInit {
  WishListItem:any
  item:any;
  quantity:any=''
  size:string='';
  durationInSeconds = 9;
  constructor(@Inject(MAT_DIALOG_DATA) public data:CheckoutComponent,private productservice:ProductService,private snackbar:MatSnackBar,
  private closeDialog:MatDialogRef<TemplateStringsArray,RTCAnswerOptions>){
  }
  ngOnInit(): void {
    console.log(" imported data",this.data);
    this.WishListItem = this.data;
    console.log("cart data",this.WishListItem.id)
  }
  onClick():void{
    this.closeDialog.close()
  }
  addtoCart(_id:any):void{
    this.productservice.addItemTocart(this.WishListItem.product.id,this.quantity,this.size).subscribe((res)=>{
      console.log("product with Id added to cart",res);
      window.location.reload()
    },
    (error)=>{
      if (error.status === 401) {
        alert("Unauthorized: You need to log in to add items to your wishlist.");
      } else {
        alert("An error occurred while adding the product to the wishlist.");
      }
      console.error("Error adding product to wishlist:", error);
    }
    )
  }
  openSnackbar(WishListItem:any):void{
    console.log("moving to cart item",WishListItem);
    this.snackbar.openFromComponent(AddBagSnackbar1Component,{
      duration:this. durationInSeconds*2000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      data:WishListItem
    })
  }
  onSizeChange(_size: string): void {
    this.size=this.size
  }
}  