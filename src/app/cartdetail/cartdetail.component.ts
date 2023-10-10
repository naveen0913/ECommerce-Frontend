import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cartdetail',
  templateUrl: './cartdetail.component.html',
  styleUrls: ['./cartdetail.component.css']
})
export class CartdetailComponent implements OnInit{

  cartItem:any;
  size:any;
  quantity:any=1

  constructor(private route:ActivatedRoute,private productservice:ProductService,private http:HttpClient){

  }

  ngOnInit(): void {
    let cartid=this.route.snapshot.paramMap.get('cartid')
    console.log(cartid);

    cartid && this.productservice.getCartItemDetails(cartid).subscribe((data)=>{
      this.cartItem=data
      console.log("cart Item details by Id",data);
      
    })
    
  }


  /*
  updateCartItembysize(id:string,size:string):void{
    const body={size}
    this.http.put("http://localhost:8080/products/cart/update/size/"+id,body).subscribe((data)=>{
      this.size=data
      console.log("updated size",data);
    })
  }*/

  UpdateCartSize(_id:string,_size:string):void{
    this.productservice.updateCartItem(this.cartItem.id,this.size).subscribe((res)=>{
      if(res.ok===false){
        alert("Upadtion failed")
      }
      else{
        alert("Updated successfully")
        console.log("Updated cart product",res);
      }
    },(error)=>{
      if (error.status === 401) {
        alert("Unauthorized error , updating size.");
      } else {
        alert("An error occurred while upadating the cartItem.");
      }
      console.error("Error while upadating the cartItem", error);
    }
  )
  }

  cartItemIncrement(_id:string,_quantity:any):void{
    this.productservice.cartItemIncrement(this.cartItem.id,this.quantity).subscribe((res)=>{
      if(res && res.ok){
        alert("Updation failed")
      }
      else{
        alert("Updated successfully")
        console.log("Updated cart product",res);
      }
    },(error)=>{
      if (error.status === 401) {
        alert("Unauthorized error , updating quantity.");
      } else {
        alert("An error occurred while Increasing the cartItem.");
      }
      console.error("Error while upadating the cartItem", error);
    })
  }

  public increment() {
    this.quantity++;
    return this.quantity;
  }

  public decrement() {
    this.quantity--;
    return this.quantity;
  }

}
