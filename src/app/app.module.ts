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
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatListModule} from '@angular/material/list';
import { MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';
import { SizeDialogComponent } from './size-dialog/size-dialog.component';
import { DialogQuantityComponent } from './dialog-quantity/dialog-quantity.component';
import {MatCardModule} from '@angular/material/card';
import { BagDialogComponent } from './bag-dialog/bag-dialog.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PincodeDialogComponent } from './pincode-dialog/pincode-dialog.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { MenProductsComponent } from './men-products/men-products.component';
import { WomenProductsComponent } from './women-products/women-products.component';
import { KidsProductsComponent } from './kids-products/kids-products.component';
import { AddBagSnackbarComponent } from './add-bag-snackbar/add-bag-snackbar.component';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { AddressComponent } from './address/address.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';

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
  {
    path:'cart/:cartid',component:SizeDialogComponent
  },
  {
    path:'home/men',component:MenComponent
  },
  {
    path:'home/men/products',component:MenProductsComponent
  },
  {
    path:'home/women',component:WomenComponent
  },
  {
    path:'home/women/products',component:WomenProductsComponent
  },
  {
    path:'home/kids',component:KidsComponent
  },
  {
    path:'home/kids/products',component:KidsProductsComponent
  },{
    path:'address',component:AddressComponent
  }
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
    DialogComponent,
    SizeDialogComponent,
    DialogQuantityComponent,
    BagDialogComponent,
    PincodeDialogComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    MenProductsComponent,
    WomenProductsComponent,
    KidsProductsComponent,
    AddBagSnackbarComponent,
    AddressComponent,
    
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
    MatDividerModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatMenuModule,
    MatDialogModule,
    MatChipsModule,
    MatCardModule,
    ModalModule.forRoot(),
    MatSnackBarModule,
    MatStepperModule,
    MatCheckboxModule
  ], 
  
  providers: [SigninService,ProductService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
