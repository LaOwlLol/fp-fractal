import { TestBed, inject } from '@angular/core/testing';

import { FractalDataService } from './fractal-data.service';

describe('FractalDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FractalDataService]
    });
  });

  it('should be created', inject([FractalDataService], (service: FractalDataService) => {
    expect(service).toBeTruthy();
  }));
});
