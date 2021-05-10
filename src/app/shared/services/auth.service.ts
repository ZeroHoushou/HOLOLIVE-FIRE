import { Injectable } from '@angular/core';
import { UserI } from '../models/user.interface';
import{ AngularFireAuth } from '@angular/fire/auth'
import { Observable } from 'rxjs';

import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userData : Observable<firebase.User|null>;
  constructor(private afAuth:AngularFireAuth) {
    this.userData =afAuth.authState;
  }


  loginByEmail(user:UserI){
    const {email,password} =user;
    return this.afAuth
      .signInWithEmailAndPassword(email,password)

  }

  logout(){
    this.afAuth.signOut();
  }
}
