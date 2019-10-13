import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavResponsiveExample } from './shopping-cart.component';

describe('ShoppingCartComponent', () => {
  let component: SidenavResponsiveExample;
  let fixture: ComponentFixture<SidenavResponsiveExample>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavResponsiveExample ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavResponsiveExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
