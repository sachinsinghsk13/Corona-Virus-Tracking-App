import { Component, OnInit , Input} from '@angular/core';
import { CountryVirusData } from '../model/country-virus-data';

@Component({
  selector: '[app-location-wise-virus-data-table-row]',
  templateUrl: './location-wise-virus-data-table-row.component.html',
  styleUrls: ['./location-wise-virus-data-table-row.component.css']
})
export class LocationWiseVirusDataTableRowComponent implements OnInit {
  @Input() data: CountryVirusData;
  flag: string;
  constructor() { }

  ngOnInit(): void {
    this.flag = `https://www.countryflags.io/${this.data.country_code}/flat/64.png`;
  }

}
