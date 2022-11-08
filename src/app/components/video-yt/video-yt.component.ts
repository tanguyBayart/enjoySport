import { Component, OnInit, Input } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'video-yt',
  templateUrl: './video-yt.component.html',
  styleUrls: ['./video-yt.component.css'],
})
export class VideoYtComponent implements OnInit {
  @Input() id: string = '';
  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit(): void {}
}
