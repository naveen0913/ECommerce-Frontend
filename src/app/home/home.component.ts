import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SigninService } from '../signin.service';
import { UserService } from '../user.service';
import { Product } from '../product.model';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  products:any[]=[]
  searchProducts:any
  item:any=[]
  user:any;

  searchtext:any;
  menProducts:Product[]=[]
  womenProducts:Product[]=[]
  kidsProducts: Product[]=[];
 
  constructor(private productservice:ProductService,
              private userservice:UserService,private route:ActivatedRoute,
              private signinservice:SigninService
 )
  {
    this.signinservice.isUserLoggedIN
    this.signinservice.isLoggedIn
  }

  ngOnInit(): void { 
    this.productservice.getAllProducts().subscribe((products)=>{
      this.searchProducts=products
      this.products=products
      this.getMenProducts()
      this.getWomenProducts()
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

  enteredValue:string=''
  @Output()
  searchTextChanged:EventEmitter<string>=new EventEmitter<string>();

  onSearchedText(){ 
    this.searchTextChanged.emit(this.enteredValue);
  }

  logout():void{
    this.signinservice.userLogout();
    console.log(`user with ${this.user} loggedout successfully`);
  }
  getMenProducts():void{
    this.productservice.getProductBycategory().subscribe(products=>{
      this.menProducts=products.filter(product=>product.categoryName==='Men') 
      console.log("men data",this.menProducts);
      
    })
  }
  getWomenProducts():void{
    this.productservice.getProductBycategory().subscribe(products=>{
      this.womenProducts=products.filter(product=>product.categoryName==='Women')
      console.log("women data",this.womenProducts);
    })
  }
  getKidsproducts():void{
    this.productservice.getProductBycategory().subscribe(products=>{
      this.kidsProducts=products.filter(product=>product.categoryName==='kids')
      console.log("kids data",this.kidsProducts);
      
    })
  }

}
