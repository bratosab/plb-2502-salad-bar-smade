import { Routes } from '@angular/router';
import { OrderComponent } from './components/order/order.component';

export const appRoutes: Routes = [
  { path: '', component: OrderComponent },
  {
    path: 'kitchen',
    loadComponent: () =>
      import('./kitchen/kitchen.component').then((m) => m.KitchenComponent),
    children: []
  },
];
