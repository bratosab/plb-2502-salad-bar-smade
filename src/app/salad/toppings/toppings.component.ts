import { Component, Input } from '@angular/core';
import { Topping } from '../../models/topping.model';

@Component({
  selector: 'app-toppings',
  standalone: false,
  templateUrl: './toppings.component.html',
  styleUrl: './toppings.component.scss',
})
export class ToppingsComponent {
  @Input()
  toppings: Topping[] = [];
}
