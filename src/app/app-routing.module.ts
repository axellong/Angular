import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LadingPageComponent } from './lading-page/lading-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '',redirectTo : 'home', pathMatch : 'full'},
  { path: 'home', component : LadingPageComponent },
  {path: '',redirectTo : 'login', pathMatch : 'full'},
  { path: 'login', component : LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
