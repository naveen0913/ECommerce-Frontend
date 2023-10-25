import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WomenProductsComponent } from './women-products.component';

const routes: Routes = [{path:'',component:WomenProductsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WomenProductsRoutingModule { }
