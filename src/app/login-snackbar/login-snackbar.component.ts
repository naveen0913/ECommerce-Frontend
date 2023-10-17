import { Component, OnInit,Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { UserService } from '../user.service';
import { SigninComponent } from '../signin/signin.component';


@Component({
  selector: 'app-login-snackbar',
  templateUrl: './login-snackbar.component.html',
  styleUrls: ['./login-snackbar.component.css']
})
export class LoginSnackbarComponent implements OnInit {

  userdata:any;
  
  constructor(private userservice:UserService,@Inject(MAT_SNACK_BAR_DATA) public data:LoginSnackbarComponent
  ) {
  }
  ngOnInit(): void {
    console.log("user data", this.data);
    this.userdata=this.data
    console.log("user data",this.userdata);  
  }
  

}
