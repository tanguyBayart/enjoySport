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
  cardio_datas: Object;

  constructor(
    private fb: FormBuilder,
    private cardioService: CardioService,
    private http: HttpClient,
    public sanitizer: DomSanitizer,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('### CardioViewComponent : ngOnInit() start');
    const url = 'http://localhost:3000/cardio';
    this.initForm(this.cardioTraining);

    //Appel backend
    this.http.get(url).subscribe((cardio_datas) => {
      // console.log('################################ cardio_datas');
      this.cardio_datas = cardio_datas;
      // console.log(cardio_datas);

      // console.log('################################');
      // this.data_express = cardio_datas[0];
      // console.log('## ' + this.data_express['cardio_date']);
      // console.log('## ' + this.data_express['cardio_exercice']);
      // console.log('## ' + this.data_express['cardio_temps']);
      // console.log('## ' + this.data_express['cardio_kcal']);

      // this.cardio_datas_tab = Object.keys(cardio_datas).map(function (cle) {
      //   return [cardio_datas[cle]];
      // });
      // console.log('################################ cardio_datas_tab');
      // console.log(this.cardio_datas_tab);
      // console.log('################################');
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

  public submit(): void {
    console.log('### CardioViewComponent : submit() start (TODO)');

    if (this.cardioTraining) {
      this.cardioService.editTraining();
      // .editTraining(this.cardioTraining._id!, this.cocktailForm.value)
      // .subscribe();
    } else {
      this.cardioService.addTraining();
    }

    console.log('### CardioViewComponent : submit() end');
    // this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }

  ngAfterViewInit(): void {
    // console.log('### CardioViewComponent : ngAfterViewInit() start');
    // console.log('### CardioViewComponent : ngAfterViewInit() any stuff ?');
    // console.log('### CardioViewComponent : ngAfterViewInit() end');
  }

  ///////////////// BAR CHART : BEGIN
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartLabels = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
  ];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  ];
  ///////////////// BAR CHART : END
}
