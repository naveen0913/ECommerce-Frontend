import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SigninService } from '../signin.service';
import { UserService } from '../user.service';




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
 
  constructor(private productservice:ProductService,
              private userservice:UserService,private route:ActivatedRoute,
            private signinservice:SigninService)
  {
    this.signinservice.isUserLoggedIN
    this.signinservice.isLoggedIn
  }

  ngOnInit(): void { 
    this.productservice.getAllProducts().subscribe((products)=>{
      this.searchProducts=products
      this.products=products
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

  /*
  public getAllProducts():void{
    this.productservice.getAllProducts().subscribe(
    (res:any)=>{
      
      if(Array.isArray(res)){
        this.data=res.map((item:any)=>item);
        console.log(this.data); 
      } 
    //this.data=res;
    //console.log(res);  
    }
  )
  }

  public viewProduct(id:number,product:any):void{
    this.router.navigate([`/product/:productId`,id])
  }
  */

  logout():void{
    this.signinservice.userLogout();
    console.log(`user with ${this.user} loggedout successfully`);
  }

}
