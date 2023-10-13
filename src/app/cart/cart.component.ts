import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
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
  cartItem:any;

  constructor(private productservice:ProductService,private route:ActivatedRoute,private http:HttpClient,public dialog: MatDialog) {
    
  }
  ngOnInit(): void {
    this.productservice.getAllCartItems().subscribe((items)=>{
      this.cartItems=items
      console.log(this.cartItems);
      
      
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
    console.log("event  data",item.id)
    this.dialog.open(SizeDialogComponent, {
      width: '280px',
      height:'250px',
      data:item,
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  openDialogQuantity(item:any,enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogQuantityComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  calculateTotal(){
    
    this.total=this.cartItems.reduce((acc,item)=>acc+item.offerprice,0)
  }
  
}
  
