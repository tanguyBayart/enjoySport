import { Component, Input, OnInit } from '@angular/core';
import tipsInfos from '../../../assets/data/tips.json';

@Component({
  selector: 'app-tips-info',
  templateUrl: './tipsInfo.component.html',
  styleUrls: ['./tipsInfo.component.css'],
})
export class TipsInfoComponent implements OnInit {
  @Input() tipsInfos: any;
  constructor() {}

  ngOnInit(): void {}
}
