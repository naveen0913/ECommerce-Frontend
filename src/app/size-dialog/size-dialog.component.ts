import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-size-dialog',
  templateUrl: './size-dialog.component.html',
  styleUrls: ['./size-dialog.component.css']
})
export class SizeDialogComponent implements OnInit {

  cartItems:any[]=[]
  cartitem:any;
  constructor(private http:HttpClient,
    private productservice:ProductService,
    private route:ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data:SizeDialogComponent
    ) {
   
  }
  ngOnInit(): void {

  console.log(" impot data",this.data);
  this.cartitem = this.data;
  console.log("cart data",this.cartitem.id)
  
   
    
    
    //cartid && this.productservice.getCartItemDetails(i).subscribe((item)=>{
      //this.cartItems=item
      //this.cartitem=item
      //console.log(this.cartItems);
      //console.log(this.cartitem);
      
    //})

  }
  
}
