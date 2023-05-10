import { TestBed } from '@angular/core/testing';

import { DatafireService } from './datafire.service';

describe('DatafireService', () => {
  let service: DatafireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatafireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
