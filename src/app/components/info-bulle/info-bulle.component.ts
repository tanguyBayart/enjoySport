import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'info-bulle',
  templateUrl: './info-bulle.component.html',
  styleUrls: ['./info-bulle.component.css'],
})
export class InfoBulleComponent implements OnInit, AfterViewInit {
  @Input() src = '';
  @Input() title = '';
  @Input() content = '';
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    $('.info-bulle-popover').popover({
      trigger: 'focus',
    });
  }
}
