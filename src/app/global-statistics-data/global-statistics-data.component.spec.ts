import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalStatisticsDataComponent } from './global-statistics-data.component';

describe('GlobalStatisticsDataComponent', () => {
  let component: GlobalStatisticsDataComponent;
  let fixture: ComponentFixture<GlobalStatisticsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalStatisticsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalStatisticsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
