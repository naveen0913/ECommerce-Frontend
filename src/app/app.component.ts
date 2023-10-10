import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SigninService } from './signin.service';
import { ProductService } from './product.service';
import { UserService } from './user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title="eCommerce"
  
  cartItem:number | undefined;
  

  constructor(private http:HttpClient,public signinservice:SigninService,
              private productservice:ProductService,
              
              private route:ActivatedRoute
              
  )
  {  
    
  }
  



  ngOnInit(): void {   
  }

  searchText:string=''
  onSearchvalueEntered(searchvalue:string){
    this.searchText=searchvalue;
    console.log(this.searchText);
  }
}
