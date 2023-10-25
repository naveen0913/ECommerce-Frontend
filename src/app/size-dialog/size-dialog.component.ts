import { Component, Inject, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-size-dialog',
  templateUrl: './size-dialog.component.html',
  styleUrls: ['./size-dialog.component.css']
})
export class SizeDialogComponent implements OnInit {
  cartitem:any;
  size:any;
  constructor(private productservice:ProductService,@Inject(MAT_DIALOG_DATA) public data:SizeDialogComponent) { }
  ngOnInit(): void {
  console.log(" impot data",this.data);
  this.cartitem = this.data;
  console.log("cart data",this.cartitem.id)
  }
  updateCartSize(_id:string):void{
    this.productservice.updateCartItem(this.cartitem.id,this.size).subscribe((res)=>{
      console.log("updated size",res);
      window.location.reload()
    })
  }
}
