import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "../service/Auth/auth-service.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validator, Validators } from "@angular/forms";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"],
})
export class RegistrationComponent implements OnInit {
  formUSer: FormGroup;

  constructor(
    private _auth: AuthServiceService,
    private _router: Router,
    private _formbuilder: FormBuilder
  ) {
    if (_auth.isAuthenticade() == true) {
      _router.navigate(["dash-board"]);
      console.log("entra a dash");
      console.log(localStorage);
    }
  }

  ngOnInit(): void {
    this.formUSer = this._formbuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      name: ["", Validators.required],
    });
  }

  CrearUsuario() {
    const data = this.formUSer.value;
    this._auth
      .crearUsuario(data.name, data.email, data.password)
      .subscribe((accses) => {
        console.log(accses);
        console.log("entro")
        this.Login(data.name, data.password);
      }),
      (error) => {
      };
  }

  Login(user: String, password: String): void {
    if (user && password) {
      this._auth.login(user, password).subscribe(
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
