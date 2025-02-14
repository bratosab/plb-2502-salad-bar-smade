import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  { path: '', component: OrderComponent},
  {
    path: 'kitchen',
    loadChildren: () => import('./kitchen/kitchen.module').then(m => m.KitchenModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
