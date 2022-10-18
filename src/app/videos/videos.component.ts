import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TipsInfoComponent } from '../components/tipsInfo/tipsInfo.component';
import tips from 'src/assets/data/tips.json';
import tipsT from 'src/assets/data/tips_test.json';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
})
export class VideosComponent implements OnInit {
  tips_title = 'Vidéos';
  cheminIcone_build = '../../assets/images/construction.png';

  constructor() {}

  ngOnInit(): void {}
}
