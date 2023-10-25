import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {
    path:"",redirectTo:'home',pathMatch:'full' 
  },
  { path: 'home', loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule) },
  {
    path:"product/:productid",loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule)
  },
  {
    path:'cart',loadChildren:()=>import('./cart/cart.module').then(m=>m.CartModule)
  },
  {
    path:"check",loadChildren:()=>import('./checkout/checkout.module').then(m=>m.CheckoutModule)
  },
  {
    path:'signin',loadChildren:()=>import('./signin/signin.module').then(m=>m.SigninModule)
  },
  {
    path:'orders',loadChildren:()=>import('./orders/orders.module').then(m=>m.OrdersModule)
  },
  {
    path:'user/:userid',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
  },  
  {
    path:'home/men',loadChildren:()=>import('./men/men.module').then(m=>m.MenModule)
  },
  {
    path:'home/men/products',loadChildren:()=>import('./men-products/men-products.module').then(m=>m.MenProductsModule)
  },
  {
    path:'home/women',loadChildren:()=>import('./women/women.module').then(m=>m.WomenModule)
  },
  {
    path:'home/women/products',loadChildren:()=>import('./women-products/women-products.module').then(m=>m.WomenProductsModule)
  },
  {
    path:'home/kids',loadChildren:()=>import('./kids/kids.module').then(m=>m.KidsModule)
  },
  {
    path:'home/kids/products',loadChildren:()=>import('./kids-products/kids-products.module').then(m=>m.KidsProductsModule)
  },{
    path:'address',loadChildren:()=>import('./address/address.module').then(m=>m.AddressModule)
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
