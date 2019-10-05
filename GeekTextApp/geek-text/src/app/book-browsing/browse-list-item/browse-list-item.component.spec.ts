import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseListItemComponent } from './browse-list-item.component';

describe('BrowseListItemComponent', () => {
  let component: BrowseListItemComponent;
  let fixture: ComponentFixture<BrowseListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
