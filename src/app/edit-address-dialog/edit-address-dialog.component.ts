import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../product.service';
import { SigninService } from '../signin.service';
MatDialogRef
@Component({
  selector: 'app-edit-address-dialog',
  templateUrl: './edit-address-dialog.component.html',
  styleUrls: ['./edit-address-dialog.component.css']
})
export class EditAddressDialogComponent implements OnInit{
  phone:any;
  address:any;
  locality:any;
  state:any;
  city:any;
  pincode:any;
  savedAddress:any;
  user1:any
  userAddress: any;
  constructor( public dialogRef: MatDialogRef<EditAddressDialogComponent>, private signinservice:SigninService,  private productservice:ProductService,) {
    this.signinservice.isUserLoggedIN
      this.signinservice.isLoggedIn
  }
  ngOnInit(): void {
    var user=localStorage.getItem("loggedInuserKey")
    console.log("user data will appear",user);
    this.user1=Number(user);
    console.log("user id",this.user1);
    this.user1 && this.productservice.getUserAddress(this.user1).subscribe((res)=>{
      this.userAddress=res
      console.log("address",this.userAddress);  
    })
  }
  updateAddress(_id:any):void{
    this.productservice.updateAddress(this.userAddress.id,this.phone,this.address,this.city,this.locality,this.state,this.savedAddress,this.pincode).subscribe((res)=>{
      console.log("updated address",res);
      window.location.reload()
    })
  }
  closeDialog(){
    this.dialogRef.close()
  }
}
