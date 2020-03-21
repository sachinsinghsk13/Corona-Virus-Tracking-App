import { Component, OnInit } from '@angular/core';
import { LocationsVirusData } from '../model/locations-virus-data';
import { VirusDataService } from '../service/virus-data.service';

@Component({
  selector: 'app-location-wise-virus-data-table',
  templateUrl: './location-wise-virus-data-table.component.html',
  styleUrls: ['./location-wise-virus-data-table.component.css']
})
export class LocationWiseVirusDataTableComponent implements OnInit {
  rawData: LocationsVirusData;
  currentTableViewData: LocationsVirusData;
  constructor(private virusDataService: VirusDataService) { 

  }

  ngOnInit(): void {
    this.virusDataService.getLocationsVirusData().subscribe((data) => {
      this.rawData = data;
      this.currentTableViewData = JSON.parse(JSON.stringify(this.rawData));
      console.log('is equal', this.rawData == this.currentTableViewData);
    })
  }

  filterByCountry(event: { target: { value: any; }; }) {
    let str = event.target.value;
    if (!str) {
      this.currentTableViewData = JSON.parse(JSON.stringify(this.rawData));
      return;
    }
    else {
      this.currentTableViewData.locations = this.rawData.locations.filter((o) => {
        console.log(o.country, str, "comparing");
        return o.country.toLowerCase().startsWith(str.toLowerCase());
      });
      console.log(str,this.rawData, "in not");
    }
  }
}
