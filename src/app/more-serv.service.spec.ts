import { TestBed } from '@angular/core/testing';

import { MoreServService } from './more-serv.service';

describe('MoreServService', () => {
  let service: MoreServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoreServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
