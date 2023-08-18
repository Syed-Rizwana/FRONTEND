import { TestBed } from '@angular/core/testing';

import { Share1Service } from './share1.service';

describe('Share1Service', () => {
  let service: Share1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Share1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
