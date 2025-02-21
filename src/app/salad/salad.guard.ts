import { CanActivateFn, Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';

export const saladGuard: CanActivateFn = (route, state) => {
  // const orderService = inject(OrderService);
  const router = inject(Router);
  const store = inject<Store<{ app: AppState }>>(Store)

  const name = store.selectSignal(state => state.app.name)
  const tel = store.selectSignal(state => state.app.name)

  if (name() && tel()) {
    return true;
  } else {
    router.navigate(['/'])
    return false;
  }
};
