import { TestBed } from '@angular/core/testing';

import { GraoService } from './grao.service';

describe('GraoService', () => {
  let service: GraoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
