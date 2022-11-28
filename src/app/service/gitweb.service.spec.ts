import { TestBed } from '@angular/core/testing';

import { GitwebService } from './gitweb.service';

describe('GitwebService', () => {
  let service: GitwebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitwebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
