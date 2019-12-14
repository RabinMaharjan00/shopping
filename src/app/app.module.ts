import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import {HttpClientModule} from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent,
    ProductAlertComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: ProductListComponent},
      {path: 'products/:Id', component: ProductDetailsComponent},
      {path: 'cart', component: CartComponent},
      {path: 'shipping', component: ShippingComponent}
    ]),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
