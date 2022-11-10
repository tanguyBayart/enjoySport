import { AfterViewInit, Component, OnInit } from '@angular/core';

import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
  AnimationEvent,
} from '@angular/animations';

import evolutions from '../../../assets/data/evolutions.json';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-welcome-view',
  templateUrl: './welcome-view.component.html',
  styleUrls: ['./welcome-view.component.css'],
  animations: [
    trigger('list', [
      transition(
        ':enter',
        query('li', [
          style({ opacity: 0, transform: 'translateX(-100px' }),
          stagger(200, animate('5000ms ease-in')),
        ])
      ),
      transition(
        ':leave',
        query('li', [
          stagger(
            200,
            animate(
              '400ms ease-in',
              style({ opacity: 0, transform: 'translateX(100px' })
            )
          ),
        ])
      ),
    ]),
  ],
})
export class WelcomeViewComponent implements OnInit {
  public display = true;
  public evolutions = evolutions.evos;
  public html: string;
  public datas: any;
  public data_presentation: any;

  constructor(private http: HttpClient, public sanitizer: DomSanitizer) {}

  public toggle(event: AnimationEvent) {
    if (event.phaseName === 'done') {
      this.display = !this.display;
    }
  }

  ngOnInit(): void {
    const url = 'http://enjoysportback.enjoysport.org/wp-json/';
    this.http.get(url).subscribe((data) => {
      // console.log(data);
    });
    this.http.get(url + 'wp/v2/pages?slug=sample-page').subscribe((data) => {
      // console.log(data);
      this.html = data[0].content.rendered;
      // console.log(this.html);
    });
    this.http.get(url + 'wp/v2/link-footer').subscribe((data) => {
      // console.log(data);
      this.datas = data;
      // console.log(this.datas);
    });

    this.http.get(url + 'wp/v2/pages?slug=vive-le-sport').subscribe((data) => {
      this.data_presentation = data[0].content.rendered;
      // console.log(this.datas);
    });
  }

  title = 'Enjoy Sport !';
  cheminImageAppli = '../assets/images/logo.png';

  //MySQL
  cheminIcone_mysql = '../assets/images/mysql.png';
  mysqlHref = 'https://www.mysql.com/fr/';

  // O2S
  cheminIcone_o2s = '../assets/images/O2S.jpg';
  o2sHref = 'https://www.o2switch.fr/';

  // angular
  cheminIcone_angular = '../assets/images/icone_angular.png';
  angularHref = 'https://angular.io/';

  //Apache
  cheminIcone_apache = '../assets/images/icone_apache.png';
  apacheHref = 'https://httpd.apache.org/';

  // Java
  cheminIcone_java = '../assets/images/icone_java.png';
  javaHref = 'https://www.oracle.com/java/technologies/java8.html';

  //en traveaux
  cheminIcone_build = '../assets/images/construction.png';

  chemin_check = '../assets/images/checked.png';

  chemin_encours = '../assets/images/progressing.png';

  chemin_liste = '../assets/images/liste.png';
  chemin_attention = '../assets/images/warning.png';
}
