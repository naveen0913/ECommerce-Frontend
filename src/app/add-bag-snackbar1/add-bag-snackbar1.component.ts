import { Component, OnInit,Inject } from '@angular/core';
import { ProductService } from '../product.service';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { BagDialogComponent } from '../bag-dialog/bag-dialog.component';

@Component({
  selector: 'app-add-bag-snackbar1',
  templateUrl: './add-bag-snackbar1.component.html',
  styleUrls: ['./add-bag-snackbar1.component.css']
})
export class AddBagSnackbar1Component implements OnInit{
  wishlistItem:any;
  constructor(
    private productservice:ProductService,
    @Inject(MAT_SNACK_BAR_DATA) public data:BagDialogComponent
  ) 
  { 
  }
  ngOnInit(): void {
    console.log("imported wishlist data",this.data);
    this.wishlistItem=this.data
    console.log("cart item data",this.wishlistItem);
  }
}
