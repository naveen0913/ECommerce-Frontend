import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-bag-snackbar',
  templateUrl: './add-bag-snackbar.component.html',
  styleUrls: ['./add-bag-snackbar.component.css']
})
export class AddBagSnackbarComponent implements OnInit{
  cartItem:any
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data:AddBagSnackbarComponent){
  }
  ngOnInit(): void {
    console.log("imported cart data",this.data);
    this.cartItem=this.data
    console.log("cart item data",this.cartItem);
    
  }
}
