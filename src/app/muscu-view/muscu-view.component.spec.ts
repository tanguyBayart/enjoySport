import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuscuViewComponent } from './muscu-view.component';

describe('MuscuViewComponent', () => {
  let component: MuscuViewComponent;
  let fixture: ComponentFixture<MuscuViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuscuViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuscuViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
