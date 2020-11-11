import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LadingPageComponent } from "./lading-page/lading-page.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { RegisterComponent } from "./register/register.component";
import {DashBoardComponent} from "./dash-board/dash-board.component";


const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "lading", component: LadingPageComponent },
  { path: "register", component: RegisterComponent },
  { path: "dash-board", component: DashBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
