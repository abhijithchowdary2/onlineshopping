import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { ShippingComponent } from './component/shipping/shipping.component';


const routes: Routes = [
  {
    path :'',
    redirectTo:'products',
    pathMatch : 'full'

  },
  {
    path : 'products',
    component : ProductsComponent


  },
  {
    path : 'cart',
    component : CartComponent
  },
  {
    path :'shipping',
    component : ShippingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
