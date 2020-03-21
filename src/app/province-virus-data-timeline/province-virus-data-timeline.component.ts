import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-province-virus-data-timeline',
  templateUrl: './province-virus-data-timeline.component.html',
  styleUrls: ['./province-virus-data-timeline.component.css']
})
export class ProvinceVirusDataTimelineComponent implements OnInit {
  @Input() provinceData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
