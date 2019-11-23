import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListsSectionComponent } from './wish-lists-section.component';

describe('WishListsSectionComponent', () => {
  let component: WishListsSectionComponent;
  let fixture: ComponentFixture<WishListsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishListsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
