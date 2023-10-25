import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-removed-item-snackbar',
  templateUrl: './removed-item-snackbar.component.html',
  styleUrls: ['./removed-item-snackbar.component.css']
})
export class RemovedItemSnackbarComponent implements OnInit {
  removedWishlistitem:any;
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data:RemovedItemSnackbarComponent){}
   ngOnInit(): void {
     console.log("removed item data",this.data);
     this.removedWishlistitem=this.data
     console.log("removed data",this.removedWishlistitem);
   }
}
