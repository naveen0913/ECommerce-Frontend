import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';
import {  MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { SizeDialogComponent } from '../size-dialog/size-dialog.component';
import { DialogQuantityComponent } from '../dialog-quantity/dialog-quantity.component';
  

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartItems:any[]=[]
  size:any=''
  searchtext:any;
  total:number=0
  offer:number=0
  cartItem:any;
  user:any
  constructor(private productservice:ProductService,private http:HttpClient,public dialog: MatDialog) {
    
  }
  ngOnInit(): void {
    this.productservice.getAllCartItems().subscribe((items)=>{
      this.cartItems=items
    })

  }
 
  getCartItem(id:string):void{
    this.http.get("http://localhost:8080/products/cart/item"+id).subscribe((item)=>{
      console.log(item);
      this.cartItem=item
    })
  }

  openDialog(item:any,enterAnimationDuration: string, exitAnimationDuration: string): void { 
    console.log("item deleted",item);     
      this.dialog.open(DialogComponent, {
      width: '350px',
      height:'180px',
      data:item,
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  openDialogSize(item:any,enterAnimationDuration: string, exitAnimationDuration: string): void {
    console.log("size update  data",item.id)
    this.dialog.open(SizeDialogComponent, {
      width: '350px',
      height:'260px',
      data:item,
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  openDialogQuantity(item:any,enterAnimationDuration: string, exitAnimationDuration: string): void {
    console.log("quantity update item",item.id);
    this.dialog.open(DialogQuantityComponent, {
      width: '250px',
      data:item,
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

public calculateTotal(){
  let total=0;
  this.cartItems.forEach(item=>{
    total+=item.product.offerprice*item.quantity+30
  })
  return total
}
  calculateTotalByprice(){
    let offer=0;
    this.cartItems.forEach(item=>{
      offer+=item.product.price*item.quantity
    })
    return offer
  }
  calculateTotalByOfferprice(){
    let offer=0;
    this.cartItems.forEach(item=>{
      offer+=item.product.offerprice*item.quantity
    })
    return offer
  }
  
}
  
