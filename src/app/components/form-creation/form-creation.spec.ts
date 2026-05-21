import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreation } from './form-creation';

describe('FormCreation', () => {
  let component: FormCreation;
  let fixture: ComponentFixture<FormCreation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCreation],
    }).compileComponents();

    fixture = TestBed.createComponent(FormCreation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
