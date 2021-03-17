import { TestBed } from '@angular/core/testing';

import { MockappService } from './mockapp.service';

describe('MockappService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockappService = TestBed.get(MockappService);
    expect(service).toBeTruthy();
  });
});
