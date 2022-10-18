import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent implements OnInit {
  cheminIcone_build = '../../assets/images/construction.png';
  auth_todo = 'A implémenter';

  public form: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', Validators.required],
    password2: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private sub: FormBuilder) {}

  ngOnInit(): void {}

  public submit(): void {
    console.log(this.form.getRawValue());
  }
}
