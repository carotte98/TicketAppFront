import { TestBed } from '@angular/core/testing';

import { GlobalVariables } from './global-variables';

describe('GlobalVariables', () => {
  let service: GlobalVariables;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalVariables);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
