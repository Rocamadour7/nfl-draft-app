import { TestBed, inject } from '@angular/core/testing';

import { ApiConnService } from './api-conn.service';

describe('ApiConnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiConnService]
    });
  });

  it('should ...', inject([ApiConnService], (service: ApiConnService) => {
    expect(service).toBeTruthy();
  }));
});
