import { Component, OnInit } from '@angular/core';
import { SigninService } from '../signin.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginSnackbarComponent } from '../login-snackbar/login-snackbar.component';
import { UserService } from '../user.service';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  name:string='';
  email:string='';
  password:string='';

  durationInSeconds=9;
  constructor(private signinservice:SigninService,private router:Router,private snackbar:MatSnackBar,private userservice:UserService) {
    
  }

  signup(){
    this.signinservice.userSignup(this.name,this.email,this.password).subscribe(
      ((response)=>{
        if(response){
          console.log("Signup successful",response);
          alert("Signup success")
        }else{
          alert("Registration failed")
        } 
      })
    )
  }


  ngOnInit(): void {
 
  }
 
  userLogin(){
    this.signinservice.login(this.email,this.password).subscribe(
      response=>{
        if(response){
          console.log(response);
          localStorage.setItem("loggedInuserKey", JSON.stringify(response.id));
          alert("login success")
          this.router.navigate(['/home'])
        }else{
          alert("Incorrect details")
          
        }
      },
    )
  }

  loginSnackBar(email:any){
    console.log("user",email)
    this.snackbar.openFromComponent(LoginSnackbarComponent,{
      duration:this. durationInSeconds*1000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      data:email
    }) 
  }
 

}


