import { Component, OnInit } from '@angular/core';
import { LocationsVirusData } from './model/locations-virus-data';
import { GlobalVirusData } from './model/global-virus-data';
import { VirusDataService } from './service/virus-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  locationVirusData: LocationsVirusData;
  globalVirusData: GlobalVirusData;
  constructor(private virusDataService: VirusDataService) {
    
  
  }
  ngOnInit(): void {
    this.virusDataService.getGlobalVirusData().subscribe((data) => {
      this.globalVirusData = data;
    });

    this.virusDataService.getLocationsVirusData().subscribe((data) => {
      this.locationVirusData = data;
    });
  }

}
