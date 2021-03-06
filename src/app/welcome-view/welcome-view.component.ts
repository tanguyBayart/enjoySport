import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-view',
  templateUrl: './welcome-view.component.html',
  styleUrls: ['./welcome-view.component.css']
})
export class WelcomeViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Enjoy Sport !';
  cheminImageAppli = '../assets/images/logo.png';

  // AWS
 // cheminIcone_aws= '../assets/images/icone_aws.png';
 // awsHref = 'https://www.google.com/aclk?sa=L&ai=DChcSEwj0_dzOua_tAhXEhNUKHeRwA4UYABAAGgJ3cw&ae=2&sig=AOD64_0qqp-W2xMtP9COYR6tM-sACVPDpQ&q&adurl&ved=2ahUKEwiJktXOua_tAhWlDGMBHcKZDccQ0Qx6BAgKEAE';

  //MySQL
  cheminIcone_mysql= '../assets/images/mysql.png';
  mysqlHref = 'https://www.mysql.com/fr/';

  // O2S
  cheminIcone_o2s= '../assets/images/O2S.jpg';
  o2sHref = 'https://www.o2switch.fr/';

  // angular
  cheminIcone_angular='../assets/images/icone_angular.png';
  angularHref = 'https://angular.io/';

  //Apache
  cheminIcone_apache='../assets/images/icone_apache.png';
  apacheHref = 'https://httpd.apache.org/';

  // Java
  cheminIcone_java='../assets/images/icone_java.png';
  javaHref = 'https://www.oracle.com/java/technologies/java8.html';

  //en traveaux
  cheminIcone_build='../assets/images/construction.png';

  chemin_check='../assets/images/checked.png';

  chemin_encours='../assets/images/progressing.png';
}
