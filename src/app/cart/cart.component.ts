import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


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


  constructor(private productservice:ProductService,private route:ActivatedRoute,private http:HttpClient,public dialog: MatDialog) {
    
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

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  calculateTotal(){
    
    this.total=this.cartItems.reduce((acc,item)=>acc+item.offerprice,0)
  }
  
}
  
