import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrerComponent } from './registrer/registrer.component';
import { HttpClientModule } from '@angular/common/http';
import { LadingPageComponent } from './lading-page/lading-page.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrerComponent,
    LadingPageComponent,
    LoginComponent,
    OrderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
