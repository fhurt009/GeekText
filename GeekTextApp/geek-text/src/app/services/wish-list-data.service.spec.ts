import { TestBed } from '@angular/core/testing';

import { WishListDataService } from './wish-list-data.service';

describe('WishListDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WishListDataService = TestBed.get(WishListDataService);
    expect(service).toBeTruthy();
  });
});
