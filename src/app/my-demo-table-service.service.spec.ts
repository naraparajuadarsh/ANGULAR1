import { TestBed } from '@angular/core/testing';

import { MyDemoTableServiceService } from './my-demo-table-service.service';

describe('MyDemoTableServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyDemoTableServiceService = TestBed.get(MyDemoTableServiceService);
    expect(service).toBeTruthy();
  });
});
