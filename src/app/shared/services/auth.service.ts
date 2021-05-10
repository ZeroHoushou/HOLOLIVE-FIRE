import { Injectable } from '@angular/core';
import { UserI } from '../models/user.interface';
import{ AngularFireAuth } from '@angular/fire/auth'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth:AngularFireAuth) {}
  

  // loginByEmail(user:UserI){
  //   const {email,password} =user;
  //   this.afAuth.authState
  //     .signInWithEmailAndPassword(email,password)
  // }
  
}
