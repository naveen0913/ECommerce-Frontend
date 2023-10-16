import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { SigninService } from '../signin.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-kids-products',
  templateUrl: './kids-products.component.html',
  styleUrls: ['./kids-products.component.css']
})
export class KidsProductsComponent implements OnInit {

  user:any;
  searchtext:any;
  products:any[]=[]
  searchProducts:any
  kidsProducts: Product[]=[];
  constructor(private productservice:ProductService,private signinservice:SigninService) {
    this.signinservice.isUserLoggedIN
    this.signinservice.isLoggedIn
  }
  ngOnInit(): void {
    this.productservice.getAllProducts().subscribe((products)=>{
      this.searchProducts=products
      this.products=products
      this.getKidsproducts()
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

  getKidsproducts():void{
    this.productservice.getProductBycategory().subscribe(products=>{
      this.kidsProducts=products.filter(product=>product.categoryName==='kids')
      console.log("kids data",this.kidsProducts);
      
    })
  }
}
