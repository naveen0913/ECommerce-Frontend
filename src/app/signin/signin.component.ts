import { Component, OnInit } from '@angular/core';
import { SigninService } from '../signin.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  name:string='';
  email:string='';
  password:string='';


  constructor(private signinservice:SigninService,private router:Router) {
    //return this.signinservice.getloggedInuser();
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






}


