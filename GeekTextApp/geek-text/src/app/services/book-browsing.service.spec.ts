import { TestBed } from '@angular/core/testing';

import { BookBrowsingService } from './book-browsing.service';

describe('BookBrowsingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookBrowsingService = TestBed.get(BookBrowsingService);
    expect(service).toBeTruthy();
  });
});
