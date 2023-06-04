import { TestBed } from '@angular/core/testing';

import { TafqeetLibService } from './tafqeet-lib.service';

describe('TafqeetLibService', () => {
  let service: TafqeetLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TafqeetLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
