declare var require: any;

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule ,HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from "rxjs/operators";
import {formatDate} from '@angular/common';




@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  //en traveaux
  training_todo = 'A implémenter';
  news_todo_tab=[];
  news_title = 'Actualités';

  //The guardian params
  // url_guardian="https://open-platform.theguardian.com/documentation/";
  // url_ws_guardian = "https://content.guardianapis.com/search?api-key=10452178-bcfe-40a8-8968-f5527317deab&format=json&lang=fr&type=article&page-size=10&page=1";

  // NEWS API
  //usr = t.......b.....@g........
  //pwd = 44*****8
  // url_newsapi="https://newsapi.org/"
  // newsapi_key="59b3401d41a647079b83318f6bb73bf8";
  // url_ws_newsapi="https://newsapi.org/v2/top-headlines?country=fr&apiKey=59b3401d41a647079b83318f6bb73bf8&category=sport&language=fr&sortBy=publishedAt&pageSize=50";


  // media stack
  //usr = t.......b.....@g........
  //pwd = 44*****8
  url_mediastack= "https://mediastack.com/"
  mediastack_key="c2fdd1508ddd1c01e7c387e08294d777";
  // pour la pagination
  limit = 10;
  offset = 0;
  isPreviousdisabled=false;
  //url_ws_mediastack="http://api.mediastack.com/v1/news?access_key=c2fdd1508ddd1c01e7c387e08294d777&countries=fr&sort=published_desc&languages=fr&limit="+this.limit+"&offset="+this.offset;
  url_ws_mediastack="http://api.mediastack.com/v1/news?access_key=c2fdd1508ddd1c01e7c387e08294d777&countries=fr&sort=published_desc&languages=fr";


  // &page-size=10&page=2

  // tableau de réultat du get
  resultats : [];
  stringifiedData="";
  parsedJson =[];

  //icones
  // Fait
  chemin_check='../assets/images/checked.png';

  chemin_encours='../assets/images/progressing.png';


  //en traveaux
  cheminIcone_build='../assets/images/construction.png';
  //en cours
  cheminIcone_en_cours='../assets/images/progressing.png';


  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

    this.limit = 10;
    this.offset = 0;
      //Appel du WS de news
      this.getNews();




    }



    getNews(){


      // console.log("Calling WS : " + this.url_ws_mediastack+"&limit="+this.limit+"&offset="+this.offset);
      // console.log("this.offset : " + this.offset);
      // console.log("this.limit : " + this.limit);
      this.isPreviousdisabled = (this.offset-this.limit)<0;
      // console.log("isPreviousdisabled : " + this.isPreviousdisabled );

      return this.http.get(this.url_ws_mediastack+"&limit="+this.limit+"&offset="+this.offset).subscribe(
        reponse =>{
          // Convert to JSON
          this.stringifiedData = JSON.stringify(reponse);
          // console.log(this.stringifiedData);
          // Parse from JSON
          this.parsedJson = JSON.parse(this.stringifiedData);
          // console.log(this.parsedJson);
        this.resultats= Object (this.parsedJson).data;
          console.log(this.resultats);
          document.getElementsByClassName("content")[0].scrollTo(0, 0);

        }
      );

    }


    next(){
      this.offset = this.offset + this.limit;
      this.getNews();

    }

    previous(){
      this.offset = this.offset - this.limit;
      this.getNews();
    }

  }
