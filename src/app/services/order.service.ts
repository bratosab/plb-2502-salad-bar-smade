import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public name: string = '';
  public tel: string = '';

  constructor() { }
}
