import { TestBed } from '@angular/core/testing';

import { VirusDataService } from './virus-data.service';

describe('VirusDataService', () => {
  let service: VirusDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirusDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
