import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private apiUrl="http://localhost:8080/products"
  private cartUrl="http://localhost:8080/products/cart/add/{id}"
  private cartProductsUrl="http://localhost:8080/products/cart/items"
  private cartItemdeleteUrl="http://localhost:8080/products/cart/del/{id}"
  private wishListItemsUrl="http://localhost:8080/products/cart/items"
  
  public wishListItem:any=[];
  public cartItemlist:any=[];

  public productList=new BehaviorSubject<any>(this.getAllProducts)

  constructor(private http:HttpClient) {

   }

  getAllProducts():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
  
  getProductById(id:string):Observable<any>{
    return this.http.get<any>("http://localhost:8080/products/product/"+id)
  }

  addItemTocart(id:string,quantity:any,size:string):Observable<any>{
    const body={quantity,size};
    this.cartItemlist.push(body)
    this.productList.next(this.cartItemlist)
    
    return this.http.post("http://localhost:8080/products/cart/add/"+id,body)
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

  placeOrder(userId:string,productId:string,name:string,quantity:string,address:string,phone:string,size:string):Observable<any>{
    const body={name,quantity,address,phone,size}
    return this.http.post("http://localhost:8080/order/place/"+userId+`/${productId}`,body)

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

  cartItemDecrement(id:string,quantity:any):Observable<any>{
    const body={quantity}
    return this.http.put<any>(`http://localhost:8080/products/cart/update/${id}/decrease`,body)
  }

  cartItemIncrement(id:string,quantity:any):Observable<any>{
    const body={quantity}
    return this.http.put<any>(`http://localhost:8080/products/cart/update/${id}/add`,body)
  }

  getCartItemDetails(id:string):Observable<any>{
    return this.http.get<any>("http://localhost:8080/products/cart/item/"+id)
  }

  deleteCartItem(id:string):Observable<any>{
    return this.http.delete("http://localhost:8080/products/cart/del/"+id)
  }

/*
  removecartItem(product:any){
    const index=this.cartItems.indexOf(product);
    if(index!==-1){
      this.cartItems.splice(index,1)
      this.updateCartCount;
    }
  }
  getCartItems(){
    return this.cartItems
  }
  updateCartCount(id:string,quantity:any,size:string){
    const body={quantity,size};
    this.http.post<any>("http://localhost:8080/products/cart/add/"+id,body).subscribe(response=>{
      this.cartCountSubject.next(response.cartCount)
    })
  }
  getCartCount(){
    return this.cartCountSubject.asObservable();
  }
  */

  
}
