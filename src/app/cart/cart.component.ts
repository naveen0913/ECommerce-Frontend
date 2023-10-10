import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartItems:any[]=[]
  size:any=''
  searchtext:any;

  constructor(private productservice:ProductService,private route:ActivatedRoute,private http:HttpClient) {
    
  }
  ngOnInit(): void {
    this.productservice.getAllCartItems().subscribe((items)=>{
      this.cartItems=items
      console.log(this.cartItems);
    })

  }
 
  deleteCartItem(id:string):void{

    this.http.delete("http://localhost:8080/products/cart/del/"+id).subscribe((response)=>{
      response=this.cartItems     
      console.log("successfully deleted",this.cartItems);
      alert("Cart Item Deleted")
      
    })

  }



}
