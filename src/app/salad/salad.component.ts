import { Component, inject, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { ToppingsService } from '../services/toppings.service';
import { Topping } from '../models/topping.model';

@Component({
  selector: 'app-salad',
  standalone: false,
  templateUrl: './salad.component.html',
  styleUrl: './salad.component.scss',
})
export class SaladComponent implements OnInit {
  public orderService = inject(OrderService);
  private toppingsService = inject(ToppingsService);

  public toppings: Topping[] = [];

  ngOnInit(): void {
    this.toppingsService.getToppings().subscribe((toppings) => {
      this.toppings = toppings;
    });
  }
}
