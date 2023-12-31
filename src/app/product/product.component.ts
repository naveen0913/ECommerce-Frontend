
import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { SigninService } from '../signin.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})


export class ProductComponent implements OnInit {
  
  showadd:boolean=true;
  showRemove:boolean=false

  showForm=false

  item:any=[] ;

  wishlistItem:any=[];

  quantity:any;
  size:any;
  id:any=''

  userid:any=''

  order:any=[]

  name:any
  address:any;
  phone:any
  Quantity:any
  Size:any

  user1:any;

  constructor(private productservice:ProductService,private route:ActivatedRoute,private signinservice:SigninService) { 
    this.signinservice.isUserLoggedIN
    this.signinservice.isLoggedIn
  }
  
  ngOnInit(): void {
    let productid=this.route.snapshot.paramMap.get('productid')
    console.log(productid);
    console.log(typeof(productid));
    
    productid && this.productservice.getProductById(productid).subscribe((res)=>{
      this.item=res
      console.log("product details by Id",res);   
    })

    var user=localStorage.getItem("loggedInuserKey")
    console.log("user data will appear",user);
    this.user1=Number(user);
    console.log("user will appear",this.user1);

    // this.productservice.addItemToWishList(user1,productid).subscribe(res=>{
    //   this.wishlistItem=res;
    //   console.log(res);
      
    // })
   
  }
  
  addtocart(item:any):void{
    this.showadd=false
    this.showRemove=true
    console.log(item.id);
    this.productservice.addItemTocart(this.item.id,this.quantity,this.size).subscribe((res)=>{
      console.log("product with Id added to cart",res);
      this.updateCart();  
    })
  }
  
  addtoWishList(_userid:any):void{
    this.productservice.addItemToWishList(this.user1,this.item.id).subscribe((res)=>{

    if(res.ok===false && this.user1===0){
       alert("login first")
    }else{
      alert("Product added to Wishlist")
      console.log("product added",res);
    }
    },
    (error)=>{
      if (error.status === 401) {
        alert("Unauthorized: You need to log in to add items to your wishlist.");
      } else {
        alert("An error occurred while adding the product to the wishlist.");
      }
      console.error("Error adding product to wishlist:", error);
    }
    )
  }

  updateCart():void{
    const cartitem={
      quantity:this.quantity,
      size:this.size,
      item:this.item.id
    }

  }
  removeItem(item:any){
    this.showRemove=true
    this.showadd=false
  }

  placeOrder(_userid:any):void{
    this.productservice.placeOrder(this.user1,this.item.id,this.name,this.quantity,this.address,this.phone,this.size).subscribe((response)=>{

      if(response.ok===false && this.user1===0){
        alert("login first")
     }else{
       alert("order placed successfully")
       console.log("product added",response);
     }
    },
    (error)=>{
      if (error.status === 401) {
        alert("Unauthorized: You need to log in to add items to your wishlist.");
      } else {
        alert("An error occurred while placing the order. Please Login first");
      }
      console.error("Error adding product to wishlist:", error);
    }
    )
  }

  toggleForm(){
    this.showForm=!this.showForm
  }

  closeForm(){
    this.showForm=!this.showForm
  }

  get loggedInuser(){
    return this.signinservice.isLoggedIn
   }

  logout():void{
    this.signinservice.userLogout();
    console.log(`user with ${this.user1} loggedout successfully`);
  }

}

