import { Component, Input, OnInit } from '@angular/core';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
  AnimationEvent,
} from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TrainingService } from '../services/trainingService';
import { Training } from '../interfaces/training.interface';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css'],
})
export class TipsComponent implements OnInit {
  tips_title = 'Conseils';
  cheminIcone_build = '../../assets/images/construction.png';

  mb = 0;
  bej = 0;

  public MBform: FormGroup;
  public cocktailForm: FormGroup;

  public sexe: number = 0;
  public poids: number = 0;
  public taille: number = 0;
  public age: number = 0;
  public NAct: number = 0;
  /* public formGroup: FormGroup; */

  public tipsForm: FormGroup = this.fb.group({
    sexe: [0, Validators.required],
    poids: [0, Validators.required],
    taille: [0, Validators.required],
    age: [0, Validators.required],
    NAct: [1.39, Validators.required],
  });

  constructor(private fb: FormBuilder) {
    // this.formGroup = new FormGroup();
  }

  ngOnInit(): void {}

  public submit(): void {
    console.log('################## submit() called ');
    // if (this.cocktail) {
    //   this.cocktailService
    //     .editCocktail(this.cocktail._id!, this.cocktailForm.value)
    //     .subscribe();
    // } else {
    //   this.cocktailService.addCocktail(this.cocktailForm.value).subscribe();
    // }
    // this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }

  public calculateMB(): void {
    console.log('################## calculateMB() called with parameter ');
    console.log('sexe : ', this.sexe);
    console.log('poids : ', this.poids);
    console.log('taille', this.taille);
    console.log('age', this.age);

    this.mb += 10;
    console.log('age', this.age);
  }

  public calculateBEJ(): void {
    console.log('################## calculateBEJ() called');
    console.log(this.sexe, this.poids, this.taille, this.age);
    // console.log(this.fb.array);
    this.bej += 10;
  }

  private initForm(): void {
    this.cocktailForm = this.fb.group({
      sexe: [this.sexe, Validators.required],
      poid: [this.poids, Validators.required],
      taille: [this.taille, Validators.required],
      age: [this.age, Validators.required],
    });
  }
}
