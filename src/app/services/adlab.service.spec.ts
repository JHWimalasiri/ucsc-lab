import { TestBed, inject } from '@angular/core/testing';

import { AdlabService } from './adlab.service';

describe('AdlabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdlabService]
    });
  });

  it('should be created', inject([AdlabService], (service: AdlabService) => {
    expect(service).toBeTruthy();
  }));
});
