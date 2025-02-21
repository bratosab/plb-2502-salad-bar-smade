import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { Topping } from '../../models/topping.model';

@Component({
  selector: 'app-toppings',
  standalone: false,
  templateUrl: './toppings.component.html',
  styleUrl: './toppings.component.scss',
})
export class ToppingsComponent {
  toppings = input<Topping[]>([])
  toppingSelected = output<Topping>();

  public chooseTopping(topping: Topping) {
    this.toppingSelected.emit(topping);
  }
}
