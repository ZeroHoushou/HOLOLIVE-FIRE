import { Injectable } from '@angular/core';
import { UserI } from '../models/user.interface';
import{ AngularFireAuth } from '@angular/fire/auth'
import { Observable } from 'rxjs';

import firebase from 'firebase/app';
import { FileI } from '../models/file.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public userData$ : Observable<firebase.User|null>;
  constructor(private afAuth:AngularFireAuth) {
    this.userData$ =afAuth.authState;
  }


  loginByEmail(user:UserI){
    const {email,password} =user;
    return this.afAuth
      .signInWithEmailAndPassword(email,password)

  }

  logout(){
    this.afAuth.signOut();
  }
   async saveUserProfile(user: UserI) {
    (await this.afAuth.currentUser)?.updateProfile({
      displayName: user.displayName,
      photoURL: user.photoURL
    })
    .then(() => console.log('User updated'))
    .catch(err => console.log('Error', err));
  }
}
