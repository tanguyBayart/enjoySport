import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TipsInfoComponent } from '../tipsInfo/tipsInfo.component';
import tips from 'src/assets/data/tips.json';
import tipsT from 'src/assets/data/tips_test.json';
import bootstrap from 'bootstrap';
@Component({
  selector: 'app-tips-view',
  templateUrl: './tips-view.component.html',
  styleUrls: ['./tips-view.component.css'],
})
export class TipsComponent implements OnInit, AfterViewInit {
  tips_title = 'Conseils';
  cheminIcone_build = '../../assets/images/construction.png';
  cheminIcone_info = '../assets/images/info.png';

  tipsInfo = tips.tipsInfos;
  tipsInfoT = tipsT.tipsInfos;
  mb = 0;
  bej = 0;
  imc = 0;
  fcm = 0;
  fco = 0;
  pa = 0; //pression artérielle
  pad = 0; //pression artérielle diastolique
  pas = 0; //pression artérielle systolique

  public MBform: FormGroup;

  public sexe: number = 0;
  public poids: number = 0;
  public taille: number = 0;
  public age: number = 0;
  public NAct: number = 1.39;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {}

  public calculateMB(): void {
    if (+this.sexe === 0) {
      this.mb =
        9.74 * this.poids + 172.9 * this.taille - 4.737 * this.age + 667.051;
    } else {
      this.mb =
        13.707 * this.poids + 492.3 * this.taille - 6.673 * this.age + 77.607;
    }
    this.calculateImc();
    this.calculateFc();
  }

  public calculateBEJ(): void {
    this.bej = this.mb * this.NAct;
  }

  public calculateImc() {
    this.imc = this.poids / (this.taille * this.taille);
  }

  public calculateFc() {
    this.fcm = 220 - this.age;
    this.fco = (220 - this.age) * 0.75;
  }

  public calculatePA(): void {
    console.log('################### calculatePA called######################');
    console.log('PAD = ' + this.pad);
    console.log('PAS = ' + this.pas);

    this.pa = (2 * this.pad + this.pas) / 3;
    console.log('PA = ' + this.pa);
  }
}
