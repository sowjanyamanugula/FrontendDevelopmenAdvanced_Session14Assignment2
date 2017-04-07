import { TestBed, inject } from '@angular/core/testing';

import { PublicapiserviceService } from './publicapiservice.service';

describe('PublicapiserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicapiserviceService]
    });
  });

  it('should ...', inject([PublicapiserviceService], (service: PublicapiserviceService) => {
    expect(service).toBeTruthy();
  }));
});
