import { Component } from '@angular/core';
//import * as firebase from 'firebase';
 import firebase from 'firebase/app';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor() {
      const configFB = {
            apiKey: "AIzaSyChqvrqQBRV0FrI2t5q-PfSrTjpU54wMWw",
            authDomain: "enjoysport-e6d57.firebaseapp.com",
            projectId: "enjoysport-e6d57",
            storageBucket: "enjoysport-e6d57.appspot.com",
            messagingSenderId: "228098103133",
            appId: "1:228098103133:web:8e282f9670cda6921fbab4",
            measurementId: "G-YR4S294WM2"
      };
      firebase.initializeApp(configFB);
    }

  title = 'Enjoy Sport !';
  cheminImageAppli = '../assets/images/logo.png';

  // AWS
  cheminIcone_aws= '../assets/images/icone_aws.png';
  awsHref = 'https://www.google.com/aclk?sa=L&ai=DChcSEwj0_dzOua_tAhXEhNUKHeRwA4UYABAAGgJ3cw&ae=2&sig=AOD64_0qqp-W2xMtP9COYR6tM-sACVPDpQ&q&adurl&ved=2ahUKEwiJktXOua_tAhWlDGMBHcKZDccQ0Qx6BAgKEAE';

  // angular
  cheminIcone_angular='../assets/images/icone_angular.png';
  angularHref = 'https://angular.io/';

  //Apache
  cheminIcone_apache='../assets/images/icone_apache.png';
  apacheHref = 'https://httpd.apache.org/';

  // Java
  cheminIcone_java='../assets/images/icone_java.png';
  javaHref = 'https://www.oracle.com/java/technologies/java8.html';

  // Firebase
  cheminIcone_fb='../assets/images/firebase.png';
  fbHref = 'https://firebase.google.com/';

  //en traveaux
  cheminIcone_build='../assets/images/construction.png';

  //en cours
  cheminIcone_en_cours='../assets/images/progressing.png';

  //webmaster
  cheminIcone_wm = '../assets/images/webmaster.png';
  wmMail = "mailto:tanguy.bayart@gmail.com"

  //webdisigner
  cheminIcone_wd = '../assets/images/webdesigner.png';
  wdMail = "mailto:jeanyves.chaillou@gmail.com";

  //Icones8
  cheminIcone_I8 = '../assets/images/icons8.png';
  i8Href = "http://icons8.com/";




}
