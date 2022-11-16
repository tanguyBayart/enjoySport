import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBulleWpComponent } from './info-bulle-wp.component';

describe('InfoBulleWpComponent', () => {
  let component: InfoBulleWpComponent;
  let fixture: ComponentFixture<InfoBulleWpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBulleWpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBulleWpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
