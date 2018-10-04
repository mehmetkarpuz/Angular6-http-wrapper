import { TestBed, inject } from '@angular/core/testing';

import { HttpwrapperService } from './httpwrapper.service';

describe('HttpwrapperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpwrapperService]
    });
  });

  it('should be created', inject([HttpwrapperService], (service: HttpwrapperService) => {
    expect(service).toBeTruthy();
  }));
});
