import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoYtComponent } from './video-yt.component';

describe('VideoYtComponent', () => {
  let component: VideoYtComponent;
  let fixture: ComponentFixture<VideoYtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoYtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoYtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
