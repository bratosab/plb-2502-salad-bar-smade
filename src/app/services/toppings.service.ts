import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Topping } from '../models/topping.model';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToppingsService {
  private _chosenToppings: Topping[] = [];
  private _totalPrice: number = 0;

  constructor(private http: HttpClient) {}

  getToppings() {
    return this.http.get<Topping[]>('https://retoolapi.dev/udhTkG/toppings');
  }

  get chosenToppings() {
    return this._chosenToppings;
  }

  get totalPrice() {
    return this._totalPrice;
  }

  chooseTopping(topping: Topping) {
    this._chosenToppings = [...this._chosenToppings, topping];
    this.updateTotalPrice();
  }

  removeTopping(topping: Topping) {
    this._chosenToppings = this._chosenToppings.filter(
      (t) => t.id !== topping.id
    );
    this.updateTotalPrice();
  }

  private updateTotalPrice() {
    this._totalPrice = this._chosenToppings.reduce(
      (total, topping) => total + topping.price,
      0
    );
  }
}
