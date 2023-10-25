import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KidsProductsComponent } from './kids-products.component';

const routes: Routes = [{path:'',component:KidsProductsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KidsProductsRoutingModule { }
