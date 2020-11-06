import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "../service/Auth/auth-service.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validator, Validators } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";

export interface PeriodicElement {
  nombre: string;
  edad: number;
  email: string;
  id: number;
}

@Component({
  selector: "app-dash-board",
  templateUrl: "./dash-board.component.html",
  styleUrls: ["./dash-board.component.css"],
})


export class DashBoardComponent implements OnInit {
  opcion: number = 1;
  displayedColumns: string[] = ["id", "edad", "nombre", "email"];
  dataSource = null;
  ELEMENT_DATA: PeriodicElement[] = [];
  element;

  addFormGroup: FormGroup;
  deleteFormGroup: FormGroup;
  modifiedFormGroup: FormGroup;

  constructor(
    private _authService: AuthServiceService,
    private _router: Router,
    private _formbuilder: FormBuilder
  ) {
    if (_authService.isAuthenticade() == false) {
      _router.navigate(["/"]);
    } else {
      this._authService.extraerTabla().subscribe(
        (access) => {
          console.log(access);

          access.forEach((element) => {
            this.ELEMENT_DATA.push({
              edad: element.edad,
              nombre: element.nombre,
              email: element.email,
              id: element.id,
            });
          });
          this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
        },
        (error) => {}
      );
    }
  }

  ngOnInit(): void {
    this.deleteFormGroup = this._formbuilder.group({
      id: ["", Validators.required],
    });
    this.addFormGroup = this._formbuilder.group({
      nombre: ["", Validators.required],
      email: ["", Validators.required],
      edad: ["", Validators.required],
    }); 
    this.modifiedFormGroup = this._formbuilder.group({
      nombre: ["", Validators.required],
      email: ["", Validators.required],
      edad: ["", Validators.required],
      id: ["", Validators.required]
    });
  }

  agregar(): void {
    if (this.opcion != 1) {
      this.opcion = 1;
    }
  }
  eliminar(): void {
    if (this.opcion != 3) {
      this.opcion = 3;
    }
  }
  modificar(): void {
    if (this.opcion != 2) {
      this.opcion = 2;
    }
  }

  agregarUsuario() {
    const data = this.addFormGroup.value;
    this._authService.agregar(data.email, data.edad, data.nombre).subscribe((access) => {
      console.log(access);
    },
    (error) => {
      console.log("no se puedo agregar");
    })
    this.ELEMENT_DATA = [];
    this._authService.extraerTabla().subscribe(
      (access) => {
        console.log(access);

        access.forEach((element) => {
          this.ELEMENT_DATA.push({
            edad: element.edad,
            nombre: element.nombre,
            email: element.email,
            id: element.id,
          });
        });
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
      },
      (error) => {}
    );
  }
  
  obtenerid(element){

    console.log(element)
    this.element=element
    
    this.modifiedFormGroup.get("id").setValue(element.id)

    this.modifiedFormGroup.get("nombre").setValue(element.nombre)

    this.modifiedFormGroup.get("edad").setValue(element.edad)

    this.modifiedFormGroup.get("email").setValue(element.email)
  }

  updateUsuario(){
    const data = this.modifiedFormGroup.value;
    this._authService.update(data.nombre, data.edad, data.email, data.id).subscribe((access) => {
      console.log(access);
    },
    (error) => {
      console.log("no se <gregar>");
    })
    this.ELEMENT_DATA = [];
    this._authService.extraerTabla().subscribe(
      (access) => {
        console.log(access);

        access.forEach((element) => {
          this.ELEMENT_DATA.push({
            edad: element.edad,
            nombre: element.nombre,
            email: element.email,
            id: element.id,
          });
        });
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
      },
      (error) => {}
    );
  }





  eliminarUsuario() {
    const data = this.deleteFormGroup.value;
    if(data.id){
      this._authService.borrar(data.id).subscribe((access) => {
        console.log(access);
      },
      (error) => {
        console.log("no se pudo eliminar");
      })
      this.ELEMENT_DATA = [];
      this._authService.extraerTabla().subscribe(
        (access) => {
          console.log(access);

          access.forEach((element) => {
            this.ELEMENT_DATA.push({
              edad: element.edad,
              nombre: element.nombre,
              email: element.email,
              id: element.id,
            });
          });
          this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
        },
        (error) => {}
      );
    }
    

  }
}
