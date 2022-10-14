import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TipsInfoComponent } from '../components/tipsInfo/tipsInfo.component';
import tips from 'src/assets/data/tips.json';
import tipsT from 'src/assets/data/tips_test.json';
@Component({
  selector: 'app-tips-view',
  templateUrl: './tips-view.component.html',
  styleUrls: ['./tips-view.component.css'],
})
export class TipsComponent implements OnInit {
  tips_title = 'Conseils';
  cheminIcone_build = '../../assets/images/construction.png';
  tipsInfo = tips.tipsInfos;
  tipsInfoT = tipsT.tipsInfos;
  mb = 0;
  bej = 0;
  imc = 0;

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
    // console.log('################## calculateMB() called with parameter ');
    // console.log('sexe : ', this.sexe);
    // console.log('poids : ', this.poids);
    // console.log('taille', this.taille);
    // console.log('age', this.age);

    if (+this.sexe === 0) {
      this.mb =
        9.74 * this.poids + 172.9 * this.taille - 4.737 * this.age + 667.051;
    } else {
      this.mb =
        13.707 * this.poids + 492.3 * this.taille - 6.673 * this.age + 77.607;
    }

    // TODO : à vérifier !!!
    //  MB = 9,740 x P + 172,9 x T – 4,737 x A + 667,051
    // Pour les hommes : MB = 13,707 x P + 492,3 x T – 6,673 x A + 77,607

    this.calculateImc();
  }

  public calculateBEJ(): void {
    // console.log('################## calculateBEJ() called');
    // console.log(this.sexe, this.poids, this.taille, this.age);
    // console.log(this.fb.array);
    this.bej = this.mb * this.NAct;
  }

  public calculateImc() {
    // Quelle formule pour calculer son IMC ?
    // L'indice de masse corporelle ; Pareil pour les hommes et les femmes : IMC = poids en kg / taille² en m.
    // Si vous pesez 63 kg et que vous mesurez 1,70 m, il suffit par exemple de multiplier 1,70 par 1,70, ce qui donne 2,89. Vous divisez ensuite votre poids, 63, par 2,89, ce qui vous donne un IMC de 21,8 kg/m². Reste à interpréter ce résultat.
    // TODO: à vérifier !!!
    console.log('################## calculateBEJ() called');
    console.log(this.poids, this.taille, this.age);
    this.imc = this.poids / (this.taille * this.taille);
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
