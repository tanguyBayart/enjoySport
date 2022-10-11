import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsComponenty } from './tips.component';

describe('TipsComponent', () => {
  let component: TipsComponenty;
  let fixture: ComponentFixture<TipsComponenty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipsComponenty],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsComponenty);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
