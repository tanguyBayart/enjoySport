import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-evolutions',
  templateUrl: './evolutions.component.html',
  styleUrls: ['./evolutions.component.css']
})
export class EvolutionsComponent implements OnInit {
  @Input() evolutions:any;
  constructor() { }

  ngOnInit(): void {
  }

}
