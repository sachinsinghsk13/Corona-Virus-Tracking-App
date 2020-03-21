import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceVirusDataTimelineComponent } from './province-virus-data-timeline.component';

describe('ProvinceVirusDataTimelineComponent', () => {
  let component: ProvinceVirusDataTimelineComponent;
  let fixture: ComponentFixture<ProvinceVirusDataTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvinceVirusDataTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinceVirusDataTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
