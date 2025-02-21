import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  // public name: string = '';
  // public tel: string = '';

  public name = signal<string>('');
  public tel = signal<string>('');

  constructor() {}
}
