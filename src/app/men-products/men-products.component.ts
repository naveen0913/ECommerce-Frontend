import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { SigninService } from '../signin.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-men-products',
  templateUrl: './men-products.component.html',
  styleUrls: ['./men-products.component.css']
})
export class MenProductsComponent implements OnInit {
 
  user:any;
  products:any[]=[]
  searchProducts:any
  menProducts:Product[]=[]
 
  showadd:boolean=true;
  showRemove:boolean=false

  constructor(private productservice:ProductService,private signinservice:SigninService) {
    this.signinservice.isUserLoggedIN
    this.signinservice.isLoggedIn
  }

  ngOnInit(): void {

    this.productservice.getAllProducts().subscribe((products)=>{
      this.searchProducts=products
      this.products=products
      this.getMenProducts()
     
    })

    this.user=localStorage.getItem("loggedInuserKey")
    this.productservice.products().subscribe(res=>{
      //this.cartItem=res
      this.user=this.signinservice.loggedInUser()
      this.user=localStorage.getItem("loggedInuserKey");
      console.log("logged in user",this.user);
      
    })
    
  }
  get loggedInuser(){
    return this.signinservice.isLoggedIn
  }
  getMenProducts():void{
    this.productservice.getProductBycategory().subscribe(products=>{
      this.menProducts=products.filter(product=>product.categoryName==='Men') 
      console.log("men data",this.menProducts);
    })
  }
  addToWishlist(_user:any,_id:any):void{ 
    this.showadd=false
    this.showRemove=true   
    this.productservice.addItemToWishList(this.user,_id).subscribe((res)=>{
      console.log("id",_id);
      
      if(res.ok===false && this.user===0){
        alert("login first")
     }else{
       alert("Product added to Wishlist")
       console.log("product added",res);
     }
    },(error)=>{
      if (error.status === 401) {
        alert("Unauthorized: You need to log in to add items to your wishlist.");
      } else {
        alert("An error occurred while adding the product to the wishlist.");
      }
      console.error("Error adding product to wishlist:", error);
    }
    )
  }
}
