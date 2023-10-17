import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, Form } from '@angular/forms';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  
  firstFormGroup:any;
  secondFormGroup:any;
  isLinear = false;

 constructor (private formbuilder:FormBuilder){}

 ngOnInit(){

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
