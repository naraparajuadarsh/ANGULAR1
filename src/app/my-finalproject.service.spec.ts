import { TestBed } from '@angular/core/testing';

import { MyFinalprojectService } from './my-finalproject.service';

describe('MyFinalprojectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyFinalprojectService = TestBed.get(MyFinalprojectService);
    expect(service).toBeTruthy();
  });
});
