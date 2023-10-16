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
  size:any;
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
  
  }
  updateCartSize(_id:string):void{
    this.productservice.updateCartItem(this.cartitem.id,this.size).subscribe((res)=>{
      console.log("updated size",res);
      alert("updated Size")
      window.location.reload()
    })
  }
  
}
