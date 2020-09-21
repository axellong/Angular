import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { from } from "rxjs";

import { LadingPageComponent } from "./lading-page/lading-page.component";
import { LoginComponent } from "./login/login.component";
import { OrderComponent } from "./order/order.component";


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: LadingPageComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "order", pathMatch: "full" },
  { path: "order", component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
