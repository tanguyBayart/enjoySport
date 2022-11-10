import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardioViewComponent } from './cardio-view.component';

describe('CardioViewComponent', () => {
  let component: CardioViewComponent;
  let fixture: ComponentFixture<CardioViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardioViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardioViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
