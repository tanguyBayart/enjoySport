import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  //en traveaux
  cheminIcone_build = '../../assets/images/construction.png';
  auth_todo = 'A implémenter';
  auth_todo_tab = [
    'Utilisateur non identifié : Formulaires inscription / authentification/  pwd oublié',
    'Utilisateur authentifié : Formulaires déconnection  / changement pwd',
  ];

  public form: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', Validators.required],
  });

  public subscribeForm: FormGroup = this.sub.group({});

  constructor(private fb: FormBuilder, private sub: FormBuilder) {}

  ngOnInit(): void {}

  public submit(): void {
    console.log(this.form.getRawValue());
  }

  public subscribe(): void {
    console.log('TODO : Redirect to subscribe page');
  }
}
