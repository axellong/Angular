import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LadingPageComponent } from "./lading-page/lading-page.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";


const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "lading", component: LadingPageComponent },
  { path: "register", component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
