import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { Topping } from '../models/topping.model';
import {  } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ToppingsService {
  // private _chosenToppings: Topping[] = [];
  private _chosenToppings = signal<Topping[]>([]);
  

  constructor(private http: HttpClient) {}

  getToppings() {
    return this.http.get<Topping[]>('https://retoolapi.dev/udhTkG/toppings');
  }

  get chosenToppings() {
    
    this._chosenToppings
    return this._chosenToppings.asReadonly();
  }

  public totalPrice = computed(() => {
    return this._chosenToppings().reduce(
      (total, topping) => total + topping.price,
      0
    );
  });

  chooseTopping(topping: Topping) {
    this._chosenToppings.update((toppings) => [...toppings, topping]);
  }

  removeTopping(topping: Topping) {
    this._chosenToppings.update((toppings) =>
      toppings.filter((t) => t.id !== topping.id)
    );
  }

}
