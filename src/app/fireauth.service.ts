
import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router";
import { auth } from 'firebase';

@Injectable({
  providedIn: "root",
})
export class FireauthService {
  constructor(private router: Router, private authFire: AngularFireAuth) {}

  async signInWhitGoogle(){
    const result = await this.authFire.signInWithRedirect(new auth.GoogleAuthProvider());
    console.log(result)
    
  }
}
