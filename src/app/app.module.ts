import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SaladModule } from './salad/salad.module';
import { KitchenModule } from './kitchen/kitchen.module';
import { OrderComponent } from './components/order/order.component';
import { SharedMaterialModule } from './shared-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SaladModule,
        SharedMaterialModule,
        ReactiveFormsModule,
    ],
    providers: [provideAnimationsAsync(), provideHttpClient()],
    bootstrap: [AppComponent],
})
export class AppModule {}
