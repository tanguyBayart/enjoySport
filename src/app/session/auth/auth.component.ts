import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Console } from 'console';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  cheminIcone_build = '../../assets/images/construction.png';
  auth_todo = 'A implémenter';

  public form: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    console.log('### AuthComponent ngOnInit()');
  }

  public submit(): void {
    console.log('### AuthComponent submit() : ');
    // console.log(this.form.getRawValue());
    // console.log(this.form);

    var data = this.form.value;
    // for (let key of Object.keys(data)) {
    //   console.log(key);
    //   console.log(data[key]);
    // }
    // console.log(data);
    console.log(data.email);
    console.log(data.password);
    console.log('add athentication check and create session');
    console.log('Redirect to home page');

    this.router.navigate(['/', 'home']);
  }

  public redirectsubscribe(): void {
    this.router.navigate(['/', 'subscribe']);
  }
}
