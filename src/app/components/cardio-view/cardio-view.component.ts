import { DatePipe } from '@angular/common';

import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { MatTableModule } from '@angular/material/table';

import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

import { Cardio } from 'src/app/interfaces/cardio.interface';
import { CardioService } from 'src/app/services/cardio.service';

@Component({
  selector: 'app-cardio-view',
  templateUrl: './cardio-view.component.html',
  styleUrls: ['./cardio-view.component.css'],
})
export class CardioViewComponent implements OnInit, AfterViewInit {
  invalid = true; //TO SUPPRESS?
  public cardioForm: FormGroup;
  public cardioTraining: Cardio;
  public data_express: string;
  public cardio_datas_tab: any[][];
  public cardio_datas: Object;

  public isArraymode: boolean;

  constructor(
    private fb: FormBuilder,
    private cardioService: CardioService,
    private http: HttpClient,
    public sanitizer: DomSanitizer,
    private ref: ChangeDetectorRef // private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    console.log('### CardioViewComponent : ngOnInit() start');
    const url = 'http://localhost:3000/cardio';
    this.isArraymode = false;
    this.initForm(this.cardioTraining);

    //Appel backend
    this.http.get(url).subscribe((cardio_datas) => {
      this.cardio_datas = cardio_datas;
      this.updateChart(cardio_datas);
      // console.log(console.log(this.cardio_datas));
    });
    this.ref.detectChanges();
  }

  private initForm(
    cardioTraining: Cardio = {
      date: 20221120,
      discipline: '',
      temps: 0,
      kcal: 0,
    }
  ): void {
    this.cardioForm = this.fb.group({
      date: [cardioTraining.date, Validators.required],
      discipline: [cardioTraining.discipline, Validators.required],
      temps: [cardioTraining.temps, Validators.required],
      kcal: [cardioTraining.kcal, Validators.required],
    });
  }

  public switchMode(): void {
    console.log('## switchMode : isArraymode = ' + this.isArraymode);
    this.isArraymode = !this.isArraymode;
    this.ref.detectChanges();
    console.log('## switchMode : isArraymode = ' + this.isArraymode);
  }

  public submit(): void {
    console.log('### CardioViewComponent : submit() start (TODO)');

    if (this.cardioTraining) {
      console.log(
        '### CardioViewComponent : this.cardioService.editTraining() (TODO)'
      );
      this.cardioService.editTraining();
      // this.cardioService.editTraining(this.cardioTraining._id!, this.cocktailForm.value)
      // .subscribe();
    } else {
      console.log(
        '### CardioViewComponent : this.cardioService.addTraining() (TODO)'
      );
      this.cardioService.addTraining();
    }

    console.log('### CardioViewComponent : submit() end (activate routing)');
    // this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }

  ngAfterViewInit(): void {
    console.log('### CardioViewComponent : ngAfterViewInit() start');
    console.log('### CardioViewComponent : ngAfterViewInit() any stuff ?');
    console.log('### CardioViewComponent : ngAfterViewInit() end');
  }

  ///////////////// BAR CHART : BEGIN
  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: false,
  };

  public barChartType = 'line';
  public barChartLegend = true;

  public barChartLabels = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
  ];

  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Durée d'entrainement" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Calories éliminées' },
  ];

  public updateChart(datas: any): void {
    console.log('################# updateChart START');
    console.log('################# updateChart REINIT DATAS');
    this.barChartData = [
      { data: [], label: "Durée d'entrainement (mn)" },
      { data: [], label: 'Calories éliminées (Kcal)' },
    ];
    this.barChartLabels = [];

    console.log('################# updateChart ADD DATAS');
    for (let i = 0; i < datas.length; i++) {
      if (datas[i].cardio_kcal) {
        console.log(datas[i]);
        console.log(datas[i].cardio_date);
        console.log(datas[i].cardio_temps);
        console.log(datas[i].cardio_kcal);
        console.log(datas[i].cardio_kcal / datas[i].cardio_temps);

        this.barChartData[0].data.push(datas[i].cardio_temps);
        this.barChartData[1].data.push(datas[i].cardio_kcal);
        this.barChartLabels.push(datas[i].cardio_date);
        //        this.barChartLabels.push(datas[i].cardio_date);
      }
    }
    console.log('#################' + this.barChartData);

    console.log('################# updateChart END');
  }

  ///////////////// BAR CHART : END
}
