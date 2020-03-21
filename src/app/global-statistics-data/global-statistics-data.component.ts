import { Component, OnInit, Input } from '@angular/core';
import { GlobalVirusData } from '../model/global-virus-data';

@Component({
  selector: 'app-global-statistics-data',
  templateUrl: './global-statistics-data.component.html',
  styleUrls: ['./global-statistics-data.component.css']
})
export class GlobalStatisticsDataComponent implements OnInit {
  @Input() globalStatisticsData: GlobalVirusData;
  constructor() { }

  ngOnInit(): void {
  }

}
