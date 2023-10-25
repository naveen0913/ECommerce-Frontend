import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { SigninService } from '../signin.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  showPassword=false;
  showForm=false;
  user:any;
  id:any;
  name:any;
  email:any;
  password:any;
  constructor(private route:ActivatedRoute,private userservice:UserService,private signinservice:SigninService) {}
  ngOnInit(): void {
    var USER=this.route.snapshot.paramMap.get('userid')
    console.log(USER);
    USER && this.userservice.getUser(USER).subscribe((res)=>{
      this.user=res
      console.log("user details",res); 
    })  
  }
  updateUser():void{
    this.userservice.updateUser(this.user.id,this.name,this.email,this.password).subscribe((res)=>{
      if(res.ok===false ){
        alert("login first")
     }else{
       console.log("User Details Updated Successfully",res);
       window.location.reload()
     }
     })  
  }
  toggleForm(){
    this.showForm=!this.showForm
  }
  closeForm(){
    this.showForm=!this.showForm
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  logout():void{
    this.signinservice.userLogout();
    console.log(`user with ${this.user} loggedout successfully`);
  }
}
