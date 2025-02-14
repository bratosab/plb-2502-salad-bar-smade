import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaladRoutingModule } from './salad-routing.module';
import { SaladComponent } from './salad.component';
import { ToppingsComponent } from './toppings/toppings.component';


@NgModule({
  declarations: [
    SaladComponent,
    ToppingsComponent
  ],
  imports: [
    CommonModule,
    SaladRoutingModule
  ]
})
export class SaladModule { }
