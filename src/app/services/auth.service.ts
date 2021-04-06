import { Injectable } from '@angular/core';

import * as firebaseAuth from '@firebase/auth';
import { AngularFireAuth } from "@angular/fire/auth";



//@Injectable()
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {}

  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        //firebaseAuth.createUserWithEmailAndPassword(email, password).then(
        this.afAuth.createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        this.afAuth.signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signOutUser() {
    this.afAuth.signOut();
  }

}
