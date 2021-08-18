import { TestBed } from '@angular/core/testing';

import { MyCanDeactiveGuardService } from './my-can-deactive-guard.service';

describe('MyCanDeactiveGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyCanDeactiveGuardService = TestBed.get(MyCanDeactiveGuardService);
    expect(service).toBeTruthy();
  });
});
