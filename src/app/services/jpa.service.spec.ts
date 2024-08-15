import { TestBed } from '@angular/core/testing';

import { JpaService } from './jpa.service';

describe('JpaService', () => {
  let service: JpaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JpaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
