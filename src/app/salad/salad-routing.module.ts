import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaladComponent } from './salad.component';
import { saladGuard } from './salad.guard';

const routes: Routes = [
  {
    path: 'salad', 
    component: SaladComponent,
    canActivate: [saladGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaladRoutingModule { }
