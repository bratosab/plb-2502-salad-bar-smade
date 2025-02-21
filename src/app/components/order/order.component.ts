import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent {
  public orderForm: FormGroup;
  private router = inject(Router);
  private orderService = inject(OrderService);

  constructor(fb: FormBuilder) {
    this.orderForm = fb.group({
      name: ['', Validators.required],
      tel: ['', [Validators.required, Validators.pattern('^0[6-7][0-9]{8}$')]],
    });
  }

  public startOrder() {
    if (this.orderForm.valid) {
      this.orderService.name.set(this.orderForm.value.name);
      this.orderService.tel.set(this.orderForm.value.tel);
      this.router.navigate(['salad']);
    }
  }
}
