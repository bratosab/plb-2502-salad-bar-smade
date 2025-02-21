import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrl: './order.component.scss',
    imports: [
        ReactiveFormsModule,
        MatFormField,
        MatLabel,
        MatInput,
        MatError,
        MatButton,
    ],
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
