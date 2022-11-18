import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'info-bulle-wp',
  templateUrl: './info-bulle-wp.component.html',
  styleUrls: ['./info-bulle-wp.component.css'],
})
export class InfoBulleWpComponent implements OnInit, AfterViewInit {
  @Input() src = '';
  @Input() title_popover = '';
  @Input() content = '';

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    $('.info-bulle-wp-popover').popover({
      trigger: 'focus',
      html: true,
    });
  }
}
