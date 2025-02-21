import { Component, inject, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { ToppingsService } from '../services/toppings.service';
import { Topping } from '../models/topping.model';
import { Observable } from 'rxjs';
import { ToppingsComponent } from './toppings/toppings.component';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';

@Component({
    selector: 'app-salad',
    templateUrl: './salad.component.html',
    styleUrl: './salad.component.scss',
    imports: [
        ToppingsComponent,
        AsyncPipe,
        CurrencyPipe,
    ],
})
export class SaladComponent implements OnInit {
  public toppingsService = inject(ToppingsService);
  private store = inject<Store<{ app: AppState }>>(Store)

  public name$ = this.store.select(state => state.app.name)
  public toppings$: Observable<Topping[]>;

  constructor() {
    this.toppings$= this.toppingsService.getToppings();
  }

  ngOnInit(): void {
    // this.toppingsService.getToppings().subscribe((toppings) => {
    //   this.toppings = toppings;
    // });
  }

  public toppingSelected(topping: Topping) {
    this.toppingsService.chooseTopping(topping)
  }

  public toppingDeselected(topping: Topping) {
    this.toppingsService.removeTopping(topping)
  }
}
