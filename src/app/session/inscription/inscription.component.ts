import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent implements OnInit {
  cheminIcone_build = '../../assets/images/construction.png';
  auth_todo = 'A implémenter';

  public form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', Validators.required],
    password2: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    console.log('### InscriptionComponent ### ngOnInit()');
  }

  public submit(): void {
    console.log('### InscriptionComponent ### submit()');
    // console.log(this.form.getRawValue());
    var data = this.form.value;

    console.log('name : ' + data.name);
    console.log('email : ' + data.email);
    console.log('pwd1 : ' + data.password);
    console.log('pwd2 : ' + data.password2);

    console.log('WORKING : Control forms fields');
    if (data.password.length < 6) {
      console.log('!!! password too short !!!');
    }

    if (data.password != data.password2) {
      console.log('!!! data.password != data.password2 !!!');
    }

    console.log('TODO : Create user');
    console.log('TODO : Create session');
    console.log('TOCTIVATE : Redirect to home page');

    // this.router.navigate(['/', 'home']);
  }
}
