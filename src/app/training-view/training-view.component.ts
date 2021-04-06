import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-training-view',
  templateUrl: './training-view.component.html',
  styleUrls: ['./training-view.component.css']
})
export class TrainingViewComponent implements OnInit {

  //en traveaux
  cheminIcone_build='../../assets/images/construction.png';
  training_type = 'type d\'entrainement';
  training_todo = 'A implémenter';
  training_todo_tab=[];

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.training_todo ='A implémenter :';

    if ( this.router.url.startsWith("/muscu")){
      this.training_type = 'Entrainements de musculation';
      this.training_todo_tab =['visualisation des entrainements de musculation',
      'Saisie des entrainements de musculation',
      'Modification des entrainements de musculation',
      'Suppression des entrainements de musculation'];

    }
    else {
      this.training_type = 'Entrainements cardio';
      this.training_todo_tab =['visualisation des entrainements cardio',
      'Saisie des entrainements de cardio',
      'Modification des entrainements de cardio',
      'Suppression des entrainements de cardio'];

    }

  }


  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];


}
