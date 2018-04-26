import { TestBed, inject } from '@angular/core/testing';

import { GeofactService } from './geofact.service';

describe('GeofactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeofactService]
    });
  });

  it('should be created', inject([GeofactService], (service: GeofactService) => {
    expect(service).toBeTruthy();
  }));
});
