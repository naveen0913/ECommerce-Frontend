import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { SigninService } from '../signin.service';

@Component({
  selector: 'app-women-products',
  templateUrl: './women-products.component.html',
  styleUrls: ['./women-products.component.css']
})
export class WomenProductsComponent implements OnInit{
  user:any;
  products:any[]=[]
  searchProducts:any
  womenProducts:Product[]=[]

  constructor(private productservice:ProductService,private signinservice:SigninService){
    this.signinservice.isUserLoggedIN
    this.signinservice.isLoggedIn
  }
  ngOnInit(): void {
    this.productservice.getAllProducts().subscribe((products)=>{
      this.searchProducts=products
      this.products=products
      this.getWomenProducts()
     
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
  logout():void{
    this.signinservice.userLogout();
    console.log(`user with ${this.user} loggedout successfully`);
  }
  getWomenProducts():void{
    this.productservice.getProductBycategory().subscribe(products=>{
      this.womenProducts=products.filter(product=>product.categoryName==='Women')
      console.log("women data",this.womenProducts);
    })
  }
}
