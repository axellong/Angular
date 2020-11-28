import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthServiceService {
  api: String = "https://back-web-1.herokuapp.com/";
  // api: String = "http://127.0.0.1:8000/";

  constructor(private http: HttpClient) {}

  isAuthenticade(): boolean {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      return user["token"] ? true : false; //pendiente token
    } else {
      return false;
    }
  }

  login(username: String, password: String): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.http.post(
      `${this.api}api/v1/login/`,
      { username, password },
      httpOptions
    );
  }

  extraerTabla(): Observable<any> {
    let user = JSON.parse(localStorage.getItem("user"));
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Token ${user["token"]}`,
      }),
    };
    return this.http.get(
      `${this.api}api/v1/profile/profileWeb_url`,
      httpOptions
    );
  }

  agregar(nombre: String, edad: number, email: string): Observable<any> {
    let user = JSON.parse(localStorage.getItem("user"));
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Token ${user["token"]}`,
      }),
    };
    return this.http.post(
      `${this.api}api/v1/profile/profileWeb_url`,
      { nombre, edad, email },
      httpOptions
    );
  }

  borrar(id: String): Observable<any> {
    let user = JSON.parse(localStorage.getItem("user"));
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Token ${user["token"]}`,
      }),

      body: {
        id: `${id}`,
      },
    };
    return this.http.delete(`${this.api}api/v1/profile/profileWeb_url`,httpOptions);
  }

  update(nombre: String, edad: number, email: string,id:number): Observable<any> {
    let user = JSON.parse(localStorage.getItem("user"));
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Token ${user["token"]}`,
      }),
    };
    return  this.http.put(`${this.api}api/v1/profile/profileWeb_url`,{nombre,edad,email,id},httpOptions);
  }

  crearUsuario(username:String, email:String, password:String){
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return  this.http.post(`${this.api}api/v1/register/`,{username,email,password},httpOptions);

  }
}
