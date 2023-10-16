import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-dialog-quantity',
  templateUrl: './dialog-quantity.component.html',
  styleUrls: ['./dialog-quantity.component.css']
})
export class DialogQuantityComponent implements OnInit{

  cartItem:any;
  quantity:any;
  constructor(private productservice:ProductService,
              @Inject(MAT_DIALOG_DATA) public data:DialogQuantityComponent){

  }
  ngOnInit(): void {
    console.log("quantity update item",this.data);
    this.cartItem=this.data
    console.log("quantity update item",this.cartItem.id);
  }
  updateQuantity(_id:any):void{
    this.productservice.cartItemIncrement(this.cartItem.id,this.quantity).subscribe((res)=>{
      console.log("quantity updated",res);
      alert("quantity updated")
      window.location.reload()
    })
  }
  
}
