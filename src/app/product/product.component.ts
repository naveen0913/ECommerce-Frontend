import {  Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { SigninService } from '../signin.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MatDialog } from '@angular/material/dialog';
import { PincodeDialogComponent } from '../pincode-dialog/pincode-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddBagSnackbarComponent } from '../add-bag-snackbar/add-bag-snackbar.component';

@Component({
  selector:'app-product',
  templateUrl:'./product.component.html',
  styleUrls:['./product.component.css'],
 
})
export class ProductComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any> | undefined; 
  selectedImage: string=''
  hoveredImage:string=''
  showadd:boolean=true;
  showRemove:boolean=false
  item:any=[] ;
  wishlistItem:any=[];
  quantity:any;
  size:any;
  user1:any;
  durationInSeconds = 8;
  constructor(private productservice:ProductService,
    private route:ActivatedRoute,private signinservice:SigninService, private  modalService: BsModalService,private modalRef:BsModalRef,private dialog:MatDialog,
    private snackbar:MatSnackBar) { 
    this.signinservice.isUserLoggedIN
    this.signinservice.isLoggedIn
  }
  ngOnInit(): void {
    let productid=this.route.snapshot.paramMap.get('productid')
    productid && this.productservice.getProductById(productid).subscribe((res)=>{
      this.item=res
      console.log("product details by Id",res);   
    })
    var user=localStorage.getItem("loggedInuserKey")
    this.user1=Number(user);
    console.log("user will appear",this.user1);
  }
  addtoCart(_item:any):void{
    this.showadd=false
    this.showRemove=true
    this.productservice.addItemTocart(this.item.id,this.quantity,this.size).subscribe((res)=>{
      console.log("product with Id added to cart",res);  
    })
  }
  openSnackbar(item:any):void{
    console.log(this.item);
    this.snackbar.openFromComponent(AddBagSnackbarComponent,{
      duration:this. durationInSeconds*1000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      data:item
    })
  }
  addtoWishList(_userid:any,_id:any):void{
    this.productservice.addItemToWishList(this.user1,this.item.id).subscribe((res)=>{
    if(res.ok===false && this.user1===0){
       alert("login first")
    }else{
      console.log("product added",res);
    }
    })
  }
  get loggedInuser(){
    return this.signinservice.isLoggedIn
   }
  logout():void{
    this.signinservice.userLogout();
    console.log(`user with ${this.user1} loggedout successfully`);
  }
  openModal(template: TemplateRef<any>,_image:string) {
    this.selectedImage=this.item.image;
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }
  closeModal() {
    this.modalRef.hide();
  }
  updateSelectedImage(_image: string) {
    this.selectedImage = this.item._image;
  }
  onHover(image: string) {
    this.hoveredImage = image;
  }
  openPinCodeDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PincodeDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  measurementInCm(){ }
}

