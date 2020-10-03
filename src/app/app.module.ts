import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { LadingPageComponent } from './lading-page/lading-page.component';
import {HeaderComponent} from './header/header.component';
import { RegisterComponent } from './register/register.component';

// angularfirebase
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBswct-WKCG3n-Eec0ithhKEdpETJM52nY",
  authDomain: "angular-deploy-dc831.firebaseapp.com",
  databaseURL: "https://angular-deploy-dc831.firebaseio.com",
  projectId: "angular-deploy-dc831",
  storageBucket: "angular-deploy-dc831.appspot.com",
  messagingSenderId: "697454246314",
  appId: "1:697454246314:web:1d6cf1b7504d198eb053d3",
  measurementId: "G-B3WS5FSKPK"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LadingPageComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
