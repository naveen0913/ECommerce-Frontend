import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenProductsComponent } from './men-products.component';

const routes: Routes = [{path:'',component:MenProductsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenProductsRoutingModule { }
