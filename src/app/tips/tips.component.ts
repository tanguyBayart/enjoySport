import { Component, OnInit } from '@angular/core';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
  AnimationEvent,
} from '@angular/animations';

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

  constructor() {}

  ngOnInit(): void {}
}
