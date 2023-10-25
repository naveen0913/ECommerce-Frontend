import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { SigninService } from '../signin.service';
import { Product } from '../product.model';
@Component({
  selector: 'app-kids-products',
  templateUrl: './kids-products.component.html',
  styleUrls: ['./kids-products.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class KidsProductsComponent implements OnInit {
  user:any;
  searchtext:any; 
  kidsProducts: Product[]=[];
  constructor(private productservice:ProductService,private signinservice:SigninService,private cdr: ChangeDetectorRef) {
    this.signinservice.isUserLoggedIN
    this.signinservice.isLoggedIn
  }
  ngOnInit(): void {
    this.getKidsproducts()
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
  getKidsproducts():void{
    this.productservice.getProductBycategory().subscribe(products=>{
      this.kidsProducts=products.filter(product=>product.categoryName==='kids').slice()
      this.cdr.detectChanges();
      console.log("kids data",this.kidsProducts);
    })
  }
  trackByFn(index:number,item:any):number{
    return item.id
  }
}
