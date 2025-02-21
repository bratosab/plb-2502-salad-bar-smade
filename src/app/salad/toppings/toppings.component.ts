import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { Topping } from '../../models/topping.model';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-toppings',
    templateUrl: './toppings.component.html',
    styleUrl: './toppings.component.scss',
    imports: [CurrencyPipe],
})
export class ToppingsComponent {
  toppings = input<Topping[]>([])
  toppingSelected = output<Topping>();

  public chooseTopping(topping: Topping) {
    this.toppingSelected.emit(topping);
  }
}
