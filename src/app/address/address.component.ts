import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';
import { SigninService } from '../signin.service';


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
  Address:any

  phone:any;
  address:any;
  locality:any;
  state:any;
  city:any;
  pincode:any;
  savedAddress:any;

 constructor (private formbuilder:FormBuilder,private signinservice:SigninService,
              private productservice:ProductService,private userservice:UserService){
  this.signinservice.isUserLoggedIN
  this.signinservice.isLoggedIn
 }

 ngOnInit():void{
  this.productservice.getAllCartItems().subscribe((items)=>{
    this.cartItems=items
    console.log(this.cartItems);
    //this.calculateTotal()
    
    var user=localStorage.getItem("loggedInuserKey")
    console.log("user data will appear",user);
    this.user1=Number(user);
    console.log("user will appear",this.user1);

    this.user1 && this.userservice.getUser(this.user1).subscribe((res)=>{
      this.user=res
      console.log("user details",this.user);
      
    })

    this.user1 && this.productservice.getUserAddress(this.user1).subscribe((res)=>{
      this.Address=res
      console.log("user address",this.Address);
      
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
    this.productservice.orderPlacement(this.user1,_id,this.Address.id).subscribe((res)=>{
    })
  }
}
