import { TestBed } from '@angular/core/testing';

import { FundAllocationService } from './fund-allocation.service';

describe('FundAllocationService', () => {
  let service: FundAllocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundAllocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
