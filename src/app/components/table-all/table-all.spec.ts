import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAll } from './table-all';

describe('TableAll', () => {
  let component: TableAll;
  let fixture: ComponentFixture<TableAll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableAll],
    }).compileComponents();

    fixture = TestBed.createComponent(TableAll);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
