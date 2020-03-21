import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationWiseVirusDataTableRowsComponent } from './location-wise-virus-data-table-rows.component';

describe('LocationWiseVirusDataTableRowsComponent', () => {
  let component: LocationWiseVirusDataTableRowsComponent;
  let fixture: ComponentFixture<LocationWiseVirusDataTableRowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationWiseVirusDataTableRowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationWiseVirusDataTableRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
