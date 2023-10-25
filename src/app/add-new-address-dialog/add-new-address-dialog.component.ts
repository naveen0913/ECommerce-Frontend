import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../user.service';
import { ProductService } from '../product.service';
import { SigninService } from '../signin.service';

@Component({
  selector: 'app-add-new-address-dialog',
  templateUrl: './add-new-address-dialog.component.html',
  styleUrls: ['./add-new-address-dialog.component.css']
})
export class AddNewAddressDialogComponent implements OnInit {
  phone:any;
  address:any;
  locality:any;
  state:any;
  city:any;
  pincode:any;
  savedAddress:any;
  user1:any
  constructor( public dialogRef: MatDialogRef<AddNewAddressDialogComponent>,private userservice:UserService,
    private signinservice:SigninService,  private productservice:ProductService,
    ) {
      this.signinservice.isUserLoggedIN
      this.signinservice.isLoggedIn
    }
    ngOnInit(): void {
      var user=localStorage.getItem("loggedInuserKey")
      console.log("user data will appear",user);
      this.user1=Number(user);
      console.log("user id",this.user1);
    }
    addNewAddress(_user1:any):void{
      this.productservice.addAddress(this.user1,this.phone,this.address,this.city,this.locality,this.state,this.savedAddress,this.pincode).subscribe((data)=>{
        console.log("address data",data);
      })
    }
  closeDialog(){
    this.dialogRef.close()
  }
}
