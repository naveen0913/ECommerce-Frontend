import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { SigninService } from '../signin.service';
@Component({
  selector: 'app-women-products',
  templateUrl: './women-products.component.html',
  styleUrls: ['./women-products.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class WomenProductsComponent implements OnInit{
  user:any;
  womenProducts:Product[]=[]
  constructor(private productservice:ProductService,private signinservice:SigninService, private cdr: ChangeDetectorRef){
    this.signinservice.isUserLoggedIN
    this.signinservice.isLoggedIn
  }
  ngOnInit(): void {
    this.getWomenProducts()
    this.user=localStorage.getItem("loggedInuserKey")
    console.log("logged in user",this.user);
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
      this.womenProducts=products.filter(product=>product.categoryName==='Women').slice()
      this.cdr.detectChanges();
      console.log("women data",this.womenProducts);
    })
  }
  trackByFn(index:number,item:any):number{
    return item.id
  }
}
