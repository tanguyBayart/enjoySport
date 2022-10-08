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
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TrainingService } from '../services/trainingService';
import { Training } from '../interfaces/training.interface';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css'],
  animations: [
    trigger('list', [
      transition(
        ':enter',
        query('li', [
          style({ opacity: 0, transform: 'translateX(-100px' }),
          stagger(-200, animate('5000ms ease-in')),
        ])
      ),
      transition(
        ':leave',
        query('li', [
          stagger(
            -200,
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
export class TipsComponent implements OnInit {
  tips_title = 'Conseils';
  cheminIcone_build = '../../assets/images/construction.png';

  mb = 0;

  public MBform: FormGroup;
  @Input() public sexe: number;
  @Input() public poids: number;
  @Input() public taille: number;
  @Input() public age: number;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private trainingService: TrainingService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  public submit(): void {
    console.log('submit() called (TODO)');
  }

  public calculateMB(): void {
    console.log('calculateMB()gn called');
  }
}
