import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, Form } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  
  firstFormGroup:any;
  secondFormGroup:any;
  isLinear = false;

  cartItems:any=[]
 constructor (private formbuilder:FormBuilder,private route:ActivatedRoute,private productservice:ProductService){}

 ngOnInit():void{
  this.productservice.getAllCartItems().subscribe((items)=>{
    this.cartItems=items
    console.log(this.cartItems);
    //this.calculateTotal()
    
  })

  this.firstFormGroup = this.formbuilder.group({
    firstCtrl: ['', [Validators.required , Validators.minLength(4),Validators.maxLength(20),Validators.pattern('[a-zA-Z]+')]],
    phone:['',[Validators.required,Validators.minLength(10)]]
  });
  this.secondFormGroup = this.formbuilder.group({
    secondCtrl: ['', Validators.required],

   
    
    
    
  });

 }

  placeOrder(){
    alert("order placed")
  }
}
