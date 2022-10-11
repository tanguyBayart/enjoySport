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

  public sexe: number = 0;
  public poids: number = 0;
  public taille: number = 0;
  public age: number = 0;
  public NAct: number = 1.39;
  /* public formGroup: FormGroup; */

  /*public tipsForm: FormGroup = this.fb.group({
    sexe: [0, Validators.required],
    poids: [0, Validators.required],
    taille: [0, Validators.required],
    age: [0, Validators.required],
    NAct: [1.39, Validators.required],
  });*/

  constructor(private fb: FormBuilder) {
    // this.formGroup = new FormGroup();
  }

  ngOnInit(): void {}

  public calculateMB(): void {
    console.log('################## calculateMB() called with parameter ');
    console.log('sexe : ', this.sexe);
    console.log('poids : ', this.poids);
    console.log('taille', this.taille);
    console.log('age', this.age);

    if (+this.sexe === 0) {
      this.mb =
        9.74 * this.poids + 172.9 * this.taille - 4.737 * this.age + 667.051;
    } else {
      this.mb =
        13.707 * this.poids + 492.3 * this.taille - 6.673 * this.age + 77.607;
    }

    //  MB = 9,740 x P + 172,9 x T – 4,737 x A + 667,051
    // Pour les hommes : MB = 13,707 x P + 492,3 x T – 6,673 x A + 77,607
  }

  public calculateBEJ(): void {
    console.log('################## calculateBEJ() called');
    console.log(this.sexe, this.poids, this.taille, this.age);
    // console.log(this.fb.array);
    this.bej = this.mb * this.NAct;
  }

  private initForm(): void {
    /* this.tipsForm = this.fb.group({
      sexe: [this.sexe, Validators.required],
      poid: [this.poids, Validators.required],
      taille: [this.taille, Validators.required],
      age: [this.age, Validators.required],
    });*/
  }
}
