import { Component, inject, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { ToppingsService } from '../services/toppings.service';
import { Topping } from '../models/topping.model';
import { Observable } from 'rxjs';
import { ToppingsComponent } from './toppings/toppings.component';
import { AsyncPipe, CurrencyPipe } from '@angular/common';

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
  public orderService = inject(OrderService);
  public toppingsService = inject(ToppingsService);

  // public toppings: Topping[] = [];
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
