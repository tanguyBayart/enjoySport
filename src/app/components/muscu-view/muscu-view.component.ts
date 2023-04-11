import { LiveAnnouncer } from '@angular/cdk/a11y';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { CardioService } from 'src/app/services/cardio.service';
import { Training } from '../../interfaces/training.interface';
import { TrainingService } from '../../services/trainingService';

@Component({
  selector: 'app-muscu-view',
  templateUrl: './muscu-view.component.html',
  styleUrls: ['./muscu-view.component.css'],
})
export class MuscuViewComponent implements OnInit {
  cheminIcone_build = '../../assets/images/construction.png';
  training_type = "type d'entrainement";
  training_todo = 'A implémenter';
  training_todo_tab = [];
  invalid = true;
  public muscu_datas_tab: any[];

  public displayedColumns: string[] = [
    'Date',
    'Exercice',
    'Poids',
    'Répétitions',
    'Séries',
  ];
  public tableDataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;

  public trainingForm: FormGroup;
  @Input() public trainings: Training[];
  public training: Training;

  public isArraymode: boolean;

  constructor(
    private fb: FormBuilder,
    private cardioService: CardioService,
    private http: HttpClient,
    public sanitizer: DomSanitizer,
    private ref: ChangeDetectorRef,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  ngOnInit(): void {
    // console.log('### MuscuViewComponent : ngOnInit() start');
    this.isArraymode = false;

    //Appel backend
    console.log('### MuscuViewComponent : ngOnInit() request backend');
    const url = 'http://localhost:3000/muscu';
    this.http.get(url).subscribe((muscu_datas) => {
      this.updateTable(muscu_datas);
      this.updateChart(muscu_datas);
      this.tableDataSource.paginator = this.paginator;
      this.tableDataSource.sort = this.matSort;
    });
    // console.log('### MuscuViewComponent : ngOnInit() end');
  }

  public updateTable(datas: any): void {
    this.muscu_datas_tab = [...datas];
    console.log('############## muscu_datas_tab START######');

    console.log(this.muscu_datas_tab);

    this.tableDataSource = new MatTableDataSource(this.muscu_datas_tab);

    // for (let i = 0; i < datas.length; i++) {
    //   console.log('muscu_session_date : ' + datas[i].muscu_session_date);
    //   console.log(
    //     'training_muscu_exercise_name : ' +
    //       datas[i].training_muscu_exercise_name
    //   );
    //   console.log(
    //     'training_muscu_exercise_nb_poid : ' +
    //       datas[i].training_muscu_exercise_nb_poid
    //   );
    //   console.log(
    //     'training_muscu_exercise_nb_repetition : ' +
    //       datas[i].training_muscu_exercise_nb_repetition
    //   );
    //   console.log(
    //     'training_muscu_exercise_nb_serie : ' +
    //       datas[i].training_muscu_exercise_nb_serie
    //   );
    //   console.log(
    //     'training_muscu_session_id : ' + datas[i].training_muscu_session_id
    //   );
    // }
    console.log('############## muscu_datas_tab END ######');
    this.ref.detectChanges();
    // console.log('########### updateTable : ENDS !!!!!!!!!!!!!!!!');
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public barChartLabels = [
    // '2006',
    // '2007',
    // '2008',
    // '2009',
    // '2010',
    // '2011',
    // '2012',
  ];
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  ];

  public submit(): void {
    console.log('submit() called (TODO)');
  }

  public addTraining(): void {
    console.log('addTraining() called (TODO)');
    // this.trainings.trainings.push(
    //   this.fb.group({
    //     name: ['', Validators.required],
    //     quantity: [0, Validators.required],
    //   })
    // );
  }

  public updateChart(datas: any): void {
    console.log('################# updateChart START');
    this.barChartData = [
      { data: [], label: 'date' },
      { data: [], label: 'Poids total' },
    ];
    this.barChartLabels = [];
    let session_datas = this.convertExercicesToSessions(datas);

    for (let i = 0; i < session_datas.length; i++) {
      console.log(i + ' : ');
      console.log(session_datas[i]);
      console.log(session_datas[i].muscu_session_cumul);
      console.log(session_datas[i].muscu_session_date);

      this.barChartData[1].data.push(
        session_datas[i]['muscu_session_cumul'] / 2
      );

      this.barChartLabels.push(session_datas[i].muscu_session_date);
    }
    console.log('################# updateChart END');
  }

  public convertExercicesToSessions(exercises: any[]) {
    let curDate = new Date();
    let sess = [];
    let curSession = {};
    exercises.forEach((exercise) => {
      // console.log('################# ' + curDate);
      // console.log('################# ' + exercise['muscu_session_date']);

      if (curDate !== exercise['muscu_session_date']) {
        curDate = exercise['muscu_session_date'];
        curSession = {
          muscu_session_cumul: 0,
          muscu_session_date: exercise['muscu_session_date'],
          training_muscu_session_id: exercise['training_muscu_session_id'],
        };
        sess.push(curSession);
        // console.log('curSession id :' + curSession[2]);
      }
      curSession['muscu_session_cumul'] +=
        exercise['training_muscu_exercise_nb_repetition'] *
        exercise['training_muscu_exercise_nb_serie'] *
        exercise['training_muscu_exercise_nb_poid'];
      // curSession["muscu_session_cumul"] += exercise["training_muscu_exercise_nb_repetition"] * exercise["training_muscu_exercise_nb_serie"] * exercise["training_muscu_exercise_nb_poid"]}) (${exo["training_muscu_exercise_nb_repetition"] * exo["training_muscu_exercise_nb_serie"] * exo["training_muscu_exercise_nb_poid"]);
      // console.log(curSession['muscu_session_cumul']);
    });
    // console.log('################################## ');
    // console.log('################################## ');
    // console.log(
    //   '################################## convertExercicesToSessions END'
    // );
    console.log('################################## sess');
    console.log(sess);
    console.log('################################## sess');
    return sess;
  }
  // let sessions = convertExercicesToSessions(exercices)
  // console.log(sessions)

  public switchMode(): void {
    this.isArraymode = !this.isArraymode;
    this.ref.detectChanges();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableDataSource.filter = filterValue.trim().toLowerCase();
    if (this.tableDataSource.paginator) {
      this.tableDataSource.paginator.firstPage();
    }
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
