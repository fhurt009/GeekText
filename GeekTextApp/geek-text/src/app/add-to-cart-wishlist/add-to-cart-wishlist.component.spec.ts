import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartWishlistComponent } from './add-to-cart-wishlist.component';

describe('AddToCartWishlistComponent', () => {
  let component: AddToCartWishlistComponent;
  let fixture: ComponentFixture<AddToCartWishlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToCartWishlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
