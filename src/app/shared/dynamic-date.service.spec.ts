import { TestBed } from '@angular/core/testing';

import { DynamicDateService } from './dynamic-date.service';

describe('DynamicDateService', () => {
  let service: DynamicDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
