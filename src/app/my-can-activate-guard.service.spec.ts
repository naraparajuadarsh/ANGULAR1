import { TestBed } from '@angular/core/testing';

import { MyCanActivateGuardService } from './my-can-activate-guard.service';

describe('MyCanActivateGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyCanActivateGuardService = TestBed.get(MyCanActivateGuardService);
    expect(service).toBeTruthy();
  });
});
