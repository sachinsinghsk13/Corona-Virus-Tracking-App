import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationWiseVirusDataTableRowComponent } from './location-wise-virus-data-table-row.component';

describe('LocationWiseVirusDataTableRowComponent', () => {
  let component: LocationWiseVirusDataTableRowComponent;
  let fixture: ComponentFixture<LocationWiseVirusDataTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationWiseVirusDataTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationWiseVirusDataTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
