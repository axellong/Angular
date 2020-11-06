import { Component, OnInit } from "@angular/core";
import { FireauthService } from "../fireauth.service";
import { FormBuilder, FormGroup, Validator, Validators } from "@angular/forms";
import { database } from "firebase";
import { AuthServiceService } from "../service/Auth/auth-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor(
    private fire: FireauthService,
    private _formbuilder: FormBuilder,
    private _authService: AuthServiceService,
    private _router: Router
  ) {
    if(_authService.isAuthenticade()==true){
      _router.navigate(["dash-board"])
      console.log("entra a dash");
      console.log(localStorage);
      
      
    }
  }

  ngOnInit(): void {
    this.loginFormGroup = this._formbuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  SingIngoogle() {
    this.fire.signInWhitGoogle();
  }

  Login(): void {
    const data = this.loginFormGroup.value;
    if (data.email && data.password) {
      this._authService.login(data.email, data.password).subscribe(
        (access) => {
          console.log(access);
          localStorage.setItem("user", JSON.stringify(access));
          this._router.navigate(["dash-board"]);
        },
        (error) => {
          console.log("datos invalidos");
        }
      );
    }
  }
}
