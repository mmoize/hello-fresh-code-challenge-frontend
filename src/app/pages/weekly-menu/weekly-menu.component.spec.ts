import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyMenuComponent } from './weekly-menu.component';

describe('WeeklyMenuComponent', () => {
  let component: WeeklyMenuComponent;
  let fixture: ComponentFixture<WeeklyMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
