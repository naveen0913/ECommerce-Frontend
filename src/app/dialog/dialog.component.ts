import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  cartItems:any[]=[]
  constructor(private http:HttpClient,private productservice:ProductService) {
    
  }
  ngOnInit(): void {
    this.productservice.getAllCartItems().subscribe((items)=>{
      this.cartItems=items
      console.log(this.cartItems);
      
      
    })

  }
  
deleteCartItem(id:string):void{
  this.productservice.deleteCartItem(id).subscribe((res)=>{
    this.cartItems=res
    alert("item deleted")
  })
}

}