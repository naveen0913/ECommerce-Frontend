import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SizeDialogComponent } from '../size-dialog/size-dialog.component';

@Component({
  selector: 'app-bag-dialog',
  templateUrl: './bag-dialog.component.html',
  styleUrls: ['./bag-dialog.component.css']
})
export class BagDialogComponent implements OnInit {
  cartItem:any
  constructor(@Inject(MAT_DIALOG_DATA) public data:SizeDialogComponent){
  }

  ngOnInit(): void {
    console.log(" imported data",this.data);
    this.cartItem = this.data;
    console.log("cart data",this.cartItem.id)
  }
}
