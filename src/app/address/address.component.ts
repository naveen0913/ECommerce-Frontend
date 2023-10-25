import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';
import { SigninService } from '../signin.service';
import {  MatDialog } from '@angular/material/dialog';
import { EditAddressDialogComponent } from '../edit-address-dialog/edit-address-dialog.component';
import { AddNewAddressDialogComponent } from '../add-new-address-dialog/add-new-address-dialog.component';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  firstFormGroup:any;
  secondFormGroup:any;
  isLinear = false;
  user1:any;
  user:any;
  cartItems:any=[]
  item:any
  userAddress:any=[]
  phone:any;
  address:any;
  locality:any;
  state:any;
  city:any;
  pincode:any;
  savedAddress:any;
 constructor (private formbuilder:FormBuilder,private signinservice:SigninService,public dialog:MatDialog,
              private productservice:ProductService,private userservice:UserService){
  this.signinservice.isUserLoggedIN
  this.signinservice.isLoggedIn
 }
 ngOnInit():void{
  this.productservice.getAllCartItems().subscribe((items)=>{
    this.cartItems=items
    console.log("cartItems",this.cartItems);
    var user=localStorage.getItem("loggedInuserKey")
    console.log("user data will appear",user);
    this.user1=Number(user);
    console.log("user id",this.user1);
    
    this.user1 && this.userservice.getUser(this.user1).subscribe((res)=>{
      this.user=res
      console.log("user details",this.user);
    })
    this.user1 && this.productservice.getUserAddress(this.user1).subscribe((res)=>{
      this.userAddress=res
      console.log("address",this.userAddress);  
    })
  })
  this.firstFormGroup = this.formbuilder.group({
    firstCtrl: ['', [Validators.required , Validators.minLength(4),Validators.maxLength(20),Validators.pattern('[a-zA-Z]+')]],
    phone:['',[Validators.required,Validators.minLength(10)]]
  });
  this.secondFormGroup = this.formbuilder.group({
    secondCtrl: ['', Validators.required],
  });
 }
 addAddress(_user1:any):void{
  this.productservice.addAddress(this.user1,this.phone,this.address,this.city,this.locality,this.state,this.savedAddress,this.pincode).subscribe((data)=>{
    console.log("address data",data);
  })
 }
  orderPlacement(_user1:any,_id:any,_address:any){
    this.productservice.orderPlacement(this.user1,_id,this.userAddress.id).subscribe((res)=>{
    })
  }
  calculateTotal(){
    let total=0;
    this.cartItems.forEach((item: { product: { offerprice: number; }; quantity: number; })=>{
      total+=item.product.offerprice*item.quantity+30
    })
    return total
  }
  calculateTotalByprice(){
    let offer=0;
    this.cartItems.forEach((item: { product: { price: number; }; quantity: number; })=>{
      offer+=item.product.price*item.quantity
    })
    return offer
  }
  calculateTotalByOfferprice(){
    let offer=0;
    this.cartItems.forEach((item: { product: { offerprice: number; }; quantity: number; })=>{
      offer+=item.product.offerprice*item.quantity
    })
    return offer
  }
  openEditAddressDialog(enterAnimationDuration: string, exitAnimationDuration: string){
    this.dialog.open(EditAddressDialogComponent,{
      width:'480px',
      height:'500px',
      enterAnimationDuration,
      exitAnimationDuration,
    })
  }
  openAddNewAddressDialog(enterAnimationDuration: string, exitAnimationDuration: string){
    this.dialog.open(AddNewAddressDialogComponent,{
      width:'480px',
      height:'500px',
      enterAnimationDuration,
      exitAnimationDuration,
    })
  }
  deleteAddress(_id:any){
    this.productservice.deleteAddress(this.userAddress.id).subscribe((res)=>{
      console.log("address deleted",res);
      window.location.reload()
    })
  }

}
