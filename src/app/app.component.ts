import { Component, AfterViewInit } from '@angular/core';
//import * as firebase from 'firebase';
import firebase from 'firebase/app';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private dialogRef: MatDialog, private router: Router) {
    const configFB = {
      apiKey: 'AIzaSyChqvrqQBRV0FrI2t5q-PfSrTjpU54wMWw',
      authDomain: 'enjoysport-e6d57.firebaseapp.com',
      projectId: 'enjoysport-e6d57',
      storageBucket: 'enjoysport-e6d57.appspot.com',
      messagingSenderId: '228098103133',
      appId: '1:228098103133:web:8e282f9670cda6921fbab4',
      measurementId: 'G-YR4S294WM2',
    };
    firebase.initializeApp(configFB);

    /**
     * on chope les evennements du router;
     * on filtre et test si le type d'evennement est NavigationEnd
     * si oui on 's'abonne' a l'observable ( subscribe )
     *
     * à partir de là:
     * on utilise jquery pour cibler la navbar et lui dire de la fermer:
     *
     *  $ >> jquery
     *  #navbarSupportedContent >> l'id de ta navbar
     *  .collapse('hide') >> c'est la methode de  bootstrap ajouté a jquery pour piloter leurs object collapsible
     */
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => {
        $('#navbarSupportedContent').collapse('hide');
      });
  }

  ngAfterViewInit(): void {}

  title = 'Enjoy Sport !';
  cheminImageAppli = '../assets/images/logo.png';

  // AWS
  cheminIcone_aws = '../assets/images/icone_aws.png';
  awsHref =
    'https://www.google.com/aclk?sa=L&ai=DChcSEwj0_dzOua_tAhXEhNUKHeRwA4UYABAAGgJ3cw&ae=2&sig=AOD64_0qqp-W2xMtP9COYR6tM-sACVPDpQ&q&adurl&ved=2ahUKEwiJktXOua_tAhWlDGMBHcKZDccQ0Qx6BAgKEAE';

  // O2S
  cheminIcone_o2s = '../assets/images/O2S.jpg';
  o2sHref = 'https://www.o2switch.fr/';

  //MySQL
  cheminIcone_mysql = '../assets/images/mysql.png';
  mysqlHref = 'https://www.mysql.com/fr/';

  // angular
  cheminIcone_angular = '../assets/images/icone_angular.png';
  angularHref = 'https://angular.io/';

  //Apache
  cheminIcone_apache = '../assets/images/icone_apache.png';
  apacheHref = 'https://httpd.apache.org/';

  // Java
  cheminIcone_java = '../assets/images/icone_java.png';
  javaHref = 'https://www.oracle.com/java/technologies/java8.html';

  // Firebase
  cheminIcone_fb = '../assets/images/firebase.png';
  fbHref = 'https://firebase.google.com/';

  //en traveaux
  cheminIcone_build = '../assets/images/construction.png';

  //en cours
  cheminIcone_en_cours = '../assets/images/progressing.png';

  //webmaster
  cheminIcone_wm = '../assets/images/webmaster.png';
  wmMail = 'mailto:tanguy.bayart@gmail.com';

  //webdisigner
  cheminIcone_wd = '../assets/images/webdesigner.png';
  wdMail = 'mailto:jeanyves.chaillou@gmail.com';

  //Icones8
  cheminIcone_I8 = '../assets/images/icons8.png';
  i8Href = 'http://icons8.com/';

  //github
  cheminIcone_GH = '../assets/images/github.png';
  GhHref = 'https://github.com/tanguyBayart/enjoySport';
}
