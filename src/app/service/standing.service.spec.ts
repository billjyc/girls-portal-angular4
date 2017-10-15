/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StandingService } from './standing.service';

describe('StandingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StandingService]
    });
  });

  it('should ...', inject([StandingService], (service: StandingService) => {
    expect(service).toBeTruthy();
  }));
});
