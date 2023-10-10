import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from './orders/orders.component';
import { SigninService } from './signin.service';
import { ProductService } from './product.service';


import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { CartdetailComponent } from './cartdetail/cartdetail.component';
import { SearchPipe } from './search.pipe';


const routes:Routes=[
  {
    path:"",redirectTo:'home',pathMatch:'full'
  },
 
  {
    path:"home",component:HomeComponent
  },
  {
    path:"product/:productid",component:ProductComponent
  },
  {
    path:'cart',component:CartComponent
  },
  {
    path:"check",component:CheckoutComponent
  },
  {
    path:'signin',component:SigninComponent
  },
  {
    path:'orders',component:OrdersComponent
  },
  {
    path:'user/:userid',component:UserComponent
  },
  {
    path:'cartdetail/:cartid',component:CartdetailComponent
  },

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductComponent,
    CheckoutComponent, 
    SigninComponent,
    OrdersComponent,
    UserComponent,
    CartdetailComponent,
    SearchPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule
  ], 
  
  providers: [SigninService,ProductService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
