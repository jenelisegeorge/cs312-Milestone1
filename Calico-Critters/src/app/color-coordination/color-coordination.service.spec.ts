import { TestBed } from '@angular/core/testing';

import { ColorCoordinationService } from './color-coordination.service';

describe('ColorCoordinationService', () => {
  let service: ColorCoordinationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorCoordinationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
