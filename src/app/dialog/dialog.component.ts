import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  

  cartItems:any[]=[]
  cartitem:any;
  constructor(private http:HttpClient,
    private productservice:ProductService,
    @Inject(MAT_DIALOG_DATA) public data:DialogComponent ) {
    
  }
  
  
  ngOnInit(): void {
   
    console.log("deleted data",this.data);
    this.cartitem=this.data
    console.log(this.cartitem.id);
    
    
  }
  
deleteCartItem(_id:string):void{
  this.productservice.deleteCartItem(_id).subscribe(()=>{
    this.cartItems=this.cartItems.filter((item)=>item.id!==_id)
    console.log("deleted item",this.cartitem);

  })
}

}