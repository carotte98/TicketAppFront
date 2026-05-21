import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDev } from './main-dev';

describe('MainDev', () => {
  let component: MainDev;
  let fixture: ComponentFixture<MainDev>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainDev],
    }).compileComponents();

    fixture = TestBed.createComponent(MainDev);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
