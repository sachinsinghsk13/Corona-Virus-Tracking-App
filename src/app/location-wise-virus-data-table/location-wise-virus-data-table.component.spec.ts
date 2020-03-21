import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationWiseVirusDataTableComponent } from './location-wise-virus-data-table.component';

describe('LocationWiseVirusDataTableComponent', () => {
  let component: LocationWiseVirusDataTableComponent;
  let fixture: ComponentFixture<LocationWiseVirusDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationWiseVirusDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationWiseVirusDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
