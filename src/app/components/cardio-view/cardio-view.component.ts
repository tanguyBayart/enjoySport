import { DatePipe } from '@angular/common';

import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';

import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

import { Cardio } from 'src/app/interfaces/cardio.interface';
import { CardioService } from 'src/app/services/cardio.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-cardio-view',
  templateUrl: './cardio-view.component.html',
  styleUrls: ['./cardio-view.component.css', '../../../blueTable2.css'],
})
export class CardioViewComponent implements OnInit, AfterViewInit {
  public get fb(): FormBuilder {
    return this._fb;
  }
  public set fb(value: FormBuilder) {
    this._fb = value;
  }
  invalid = true; //TO SUPPRESS?
  public cardioForm: FormGroup;
  public cardioTraining: Cardio;
  public data_express: string;
  public cardio_datas_tab: any[];
  public cardio_datas: Object;

  public displayedColumns: string[] = ['Date', 'Exercice', 'Temps', 'Kcal'];
  public tableDataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;

  public isArraymode: boolean;
  // barChartDataAvg: { data: any[]; label: string }[];

  constructor(
    private _fb: FormBuilder,
    private cardioService: CardioService,
    private http: HttpClient,
    public sanitizer: DomSanitizer,
    private ref: ChangeDetectorRef,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  ngOnInit(): void {
    this.isArraymode = false;

    //initialisation du formulaire
    this.cardioTraining = {
      date: new Date().toLocaleDateString(),
      discipline: 'Marche',
      temps: 0,
      kcal: 0,
    };
    this.initForm();

    //Appel backend
    console.log('### CardioViewComponent : ngOnInit() request backend');
    const url = 'http://localhost:3000/cardio';
    this.http.get(url).subscribe((cardio_datas) => {
      this.updateTable(cardio_datas);
      this.updateChart(cardio_datas);
      this.tableDataSource.paginator = this.paginator;
      this.tableDataSource.sort = this.matSort;
    });

    this.ref.detectChanges();
  }

  private initForm(): void {
    console.log('############## initForm start ############');

    this.cardioForm = this.fb.group({
      date: [this.cardioTraining.date, Validators.required],
      discipline: [this.cardioTraining.discipline, Validators.required],
      temps: [this.cardioTraining.temps, Validators.required],
      kcal: [this.cardioTraining.kcal, Validators.required],
    });

    console.log(this.cardioForm);

    console.log('############## initForm end ############');
  }

  ngAfterViewInit(): void {}

  public switchMode(): void {
    this.isArraymode = !this.isArraymode;
    this.ref.detectChanges();
  }

  public submit(): void {
    console.log('### CardioViewComponent : submit() start (TODO)');

    console.log(
      '### CardioViewComponent : CARDIOFORM START MOTHERF*****S !!!!!'
    );

    Object.keys(this.cardioForm.controls).forEach((key) => {
      console.log(
        '### CardioViewComponent : ' + this.cardioForm.get(key).value
      );
    });
    // console.log(this.cardioForm);

    console.log('### CardioViewComponent : Check values and record !!!!');

    console.log('### CardioViewComponent : CARDIOFORM END MOTHERF*****S !!!!!');
    console.log('### CardioViewComponent : submit() end');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableDataSource.filter = filterValue.trim().toLowerCase();
    if (this.tableDataSource.paginator) {
      this.tableDataSource.paginator.firstPage();
    }
  }

  ///////////////// BAR CHART : BEGIN
  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: false,
    scales: {
      x: {
        type: 'timeseries',
      },
    },
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

  public barChartDataAvg = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Durée d'entrainement" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Calories éliminées' },
  ];

  public updateTable(datas: any): void {
    this.cardio_datas_tab = [...datas];
    console.log(this.cardio_datas_tab);

    this.tableDataSource = new MatTableDataSource(this.cardio_datas_tab);
    this.ref.detectChanges();
  }

  public updateChart(datas: any): void {
    this.barChartData = [
      { data: [], label: "Durée d'entrainement (mn)" },
      { data: [], label: 'Calories éliminées (Kcal)' },
    ];

    // AVG
    this.barChartDataAvg = [
      { data: [], label: 'Dépense énergétique moyenne (Kcal/min)' },
    ];

    this.barChartLabels = [];

    for (let i = 0; i < datas.length; i++) {
      // console.log(datas[i]);

      this.barChartData[0].data.push(datas[i].Temps);
      this.barChartData[1].data.push(datas[i].Kcal);
      this.barChartLabels.push(new Date(datas[i].Date).toLocaleDateString());

      //AVG
      //Vélo uniquement
      //if (datas[i].Kcal > 0)
      this.barChartDataAvg[0].data.push(datas[i].Kcal / datas[i].Temps);
    }
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
