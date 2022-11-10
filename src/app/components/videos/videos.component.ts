import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TipsInfoComponent } from '../tipsInfo/tipsInfo.component';
import tips from 'src/assets/data/tips.json';
import tipsT from 'src/assets/data/tips_test.json';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
})
export class VideosComponent implements OnInit {
  videos_exercices = [
    'x9X8D4is59Y',
    'l0l_liJX2Xc',
    'XwhanhV0zFU',
    'P22Oy2xjatg',
  ];

  videos_alimentation = ['yiYNQq7FEKs', 'O2AB69aofrw', '8nYVEqNzFZY'];

  videos_anglais = [
    'b7cl7sn17bo',
    '29XU4Tdis4Y',
    'IuI-e-geeZI',
    'pKoQydKDJJw',
    '0cF4crYUinE',
  ];

  vids_title = 'Vidéos';
  cheminIcone_build = '../../assets/images/construction.png';

  constructor() {}

  ngOnInit(): void {}
}
