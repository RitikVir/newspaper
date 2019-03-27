import { TestBed } from '@angular/core/testing';

import { ClientServService } from './client-serv.service';

describe('ClientServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientServService = TestBed.get(ClientServService);
    expect(service).toBeTruthy();
  });
});
