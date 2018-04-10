import { TestBed, inject } from '@angular/core/testing';

import { CompareListService } from './compare-list.service';

describe('CompareListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompareListService]
    });
  });

  it('should be created', inject([CompareListService], (service: CompareListService) => {
    expect(service).toBeTruthy();
  }));
});
