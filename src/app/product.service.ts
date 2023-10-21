import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private apiUrl="http://localhost:8080/products"
  private cartProductsUrl="http://localhost:8080/products/cart/items"

  public wishListItem:any=[];
  public cartItemlist:any=[];

  public productList=new BehaviorSubject<any>([])

  constructor(private http:HttpClient) {}

  getAllProducts():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
  setProduct(Product:any){
    this.cartItemlist.push(...Product)
    this.productList.next(Product)
  }
  addCart(Product:any){
    this.cartItemlist.push(Product)
    this.productList.next(this.cartItemlist)
  }
  getGrandTotal(){
    let totalAmount=0;
    this.cartItemlist.map((a:any)=>{
      totalAmount+=a.total;
    })
  }
  removeCartData(Product:any){
    this.cartItemlist.map((a:any,index:any)=>{
      if(Product.id===a.id){
        this.cartItemlist.splice(index,1)
      }
    })
  }
  
  
  getProductById(id:string):Observable<any>{
    return this.http.get<any>("http://localhost:8080/products/product/"+id)
  }

  addItemTocart(id:string,quantity:Number,size:string):Observable<any>{
    const body={quantity,size};
    return this.http.post<any>("http://localhost:8080/products/cart/add/"+id,body)
  }
  addItemToWishList(userid:string,id:string):Observable<any>{
    return this.http.post("http://localhost:8080/products/wishlist/add/"+userid+`/${id}`,"")
  }
  getAllCartItems():Observable<any>{
    return this.http.get<any>(this.cartProductsUrl)
  }
  getAllWishListItems(id:string):Observable<any>{
    return this.http.get<any>("http://localhost:8080/products/wishlist/items/"+id)
  }

  deleteWishlistitem(id:string):Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/products/wishlist/del/${id}`)
  }

  getAllorders(id:string):Observable<any>{
    return this.http.get<any>("http://localhost:8080/order/myorders/"+id)
  }
  
  deleteorder(id:string):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/order/del/"+id)
  }
  products():Observable<any[]>{
    return this.productList.asObservable();
  }
  searchProducts(query:string):void{
    const results=this.products.bind((product:any)=>(
      product.name.toLowerCase().includes(query.toLowerCase())
    ))
    this.productList.next(results)
  }
  updateCartItem(id:string,size:string):Observable<any>{
    const body={size}
    return this.http.put<any>("http://localhost:8080/products/cart/update/size/"+id,body)
  }
  cartItemIncrement(id:string,quantity:any):Observable<any>{
    const body={quantity}
    return this.http.put<any>(`http://localhost:8080/products/cart/update/${id}/add`,body)
  }
  getCartItemDetails(id:string):Observable<any>{
    return this.http.get<any>("http://localhost:8080/products/cart/item/"+id)
  }

  deleteCartItem(id:string):Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/products/cart/del/${id}`)
  }

  getProductBycategory():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl)
    
  }
  addAddress(userId:any,phone:Number,address:string,locality:string,state:string,city:string,pincode:number,savedAddress:string):Observable<any>{
    const body={phone,address,locality,state,city,pincode,savedAddress}
    return this.http.post<any>(`http://localhost:8080/address/add/${userId}`,body)
  }
  getUserAddress(userId:any):Observable<any>{
    return this.http.get<any>(`http://localhost:8080/address/${userId}`)
  }
  orderPlacement(userId:any,id:any,addressId:any):Observable<any>{
    return this.http.post<any>(`http://localhost:8080/order/place/${userId}/${id}/${addressId}`,'')
  }

    /*
  placeOrder(userId:string,productId:string,name:string,quantity:string,address:string,phone:string,size:string):Observable<any>{
    const body={name,quantity,address,phone,size}
    return this.http.post("http://localhost:8080/order/place/"+userId+`/${productId}`,body)
  }*/
  
}
