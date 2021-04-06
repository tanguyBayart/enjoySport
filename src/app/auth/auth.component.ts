import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  //en traveaux
  cheminIcone_build='../../assets/images/construction.png';
  auth_todo = 'A implémenter';
  auth_todo_tab = ['Utilisateur non identifié : Formulaires inscription / authentification/  pwd oublié',
    'Utilisateur authentifié : Formulaires déconnection  / changement pwd']

  constructor() { }

  ngOnInit(): void {
  }

}
