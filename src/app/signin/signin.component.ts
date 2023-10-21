import { Component, OnInit } from '@angular/core';
import { SigninService } from '../signin.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  name:string='';
  email:string='';
  password:string='';
  durationInSeconds=7;
  constructor(private signinservice:SigninService,private router:Router,private snackbar:MatSnackBar) {}
  signup(){
    this.signinservice.userSignup(this.name,this.email,this.password).subscribe(
      ((response)=>{
        if(response){
          console.log("Signup successful",response);
          this.snackbar.open("Resgistration Successful, Login Now",'close',{
            duration:this.durationInSeconds*1000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
          })
        }else{
          this.snackbar.open("User Registration failed",'close',{
            duration: this.durationInSeconds*1000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
          }) 
        } 
      })
    )
  }
  ngOnInit(): void {
  }
  userLogin(){
    this.signinservice.login(this.email,this.password).subscribe(
      response=>{
        if(response.body!="user not found" && response.body!="Invalid password"){
          console.log(response);
          localStorage.setItem("loggedInuserKey", JSON.stringify(response.body.id));
          this.snackbar.open(`Welcome Back ${response.body.name}`,'close',{
            duration:this.durationInSeconds*1000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
          })
          this.router.navigate(['/home'])
        }else{
          this.snackbar.open("Invalid User Details",'close',{
            duration: this.durationInSeconds*1000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
          }) 
        }
      },
    )
  }
}


