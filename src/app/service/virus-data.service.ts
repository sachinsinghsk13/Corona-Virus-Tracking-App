import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalVirusData } from '../model/global-virus-data';
import { LocationsVirusData } from '../model/locations-virus-data';
const api : string = "https://coronavirus-tracker-api.herokuapp.com/v2";
@Injectable({
  providedIn: 'root'
})
export class VirusDataService {

  constructor(private http: HttpClient) { 

  }

  getGlobalVirusData() {
    return this.http.get<GlobalVirusData>(`${api}/latest`);
  }

  getLocationsVirusData() {
    return this.http.get<LocationsVirusData>(`${api}/locations`);
  }

  getVirusDataByCountry(country_code: string) {
    return this.http.get<any>(`${api}/locations?country_code=${country_code}&timelines=true`);
  }
}
