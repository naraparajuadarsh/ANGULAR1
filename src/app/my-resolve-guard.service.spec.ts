import { TestBed } from '@angular/core/testing';

import { MyResolveGuardService } from './my-resolve-guard.service';

describe('MyResolveGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyResolveGuardService = TestBed.get(MyResolveGuardService);
    expect(service).toBeTruthy();
  });
});
