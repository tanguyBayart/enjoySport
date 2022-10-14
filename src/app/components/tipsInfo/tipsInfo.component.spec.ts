import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsInfoComponent } from './tipsInfo.component';

describe('TipsInfoComponent', () => {
  let component: TipsInfoComponent;
  let fixture: ComponentFixture<TipsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipsInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
