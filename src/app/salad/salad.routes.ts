import { Routes } from "@angular/router";
import { SaladComponent } from "./salad.component";
import { saladGuard } from "./salad.guard";

export const saladRoutes: Routes = [
  {
    path: 'salad', 
    component: SaladComponent,
    canActivate: [saladGuard]
  },
];