import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryVirusDataComponent } from './country-virus-data.component';

describe('CountryVirusDataComponent', () => {
  let component: CountryVirusDataComponent;
  let fixture: ComponentFixture<CountryVirusDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryVirusDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryVirusDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
