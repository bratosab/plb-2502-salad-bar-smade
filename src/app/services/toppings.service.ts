import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Topping } from '../models/topping.model';

@Injectable({
  providedIn: 'root'
})
export class ToppingsService {
  constructor(private http: HttpClient) { }

  getToppings() {
    return this.http.get<Topping[]>('https://retoolapi.dev/udhTkG/toppings');
  }
}
