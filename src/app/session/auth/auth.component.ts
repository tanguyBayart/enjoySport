import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  ngOnInit(): void {}

  public submit(): void {
    console.log(this.form.getRawValue());
  }

  public redirectsubscribe(): void {
    this.router.navigate(['/', 'subscribe']);
  }
}
