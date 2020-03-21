import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { VirusDataService } from "../service/virus-data.service";

@Component({
  selector: "app-country-virus-data",
  templateUrl: "./country-virus-data.component.html",
  styleUrls: ["./country-virus-data.component.css"]
})
export class CountryVirusDataComponent implements OnInit {
  countryVirusData: any;
  flag: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private virusDataService: VirusDataService
  ) {}
  timelinesToList(timelines: any) {
    let keys = Object.keys(timelines.confirmed.timeline);
    let arr: any[] = [];
    keys.forEach(function(key) {
      let date = new Date(key);
      let obj: any = {};
      obj.date = date;
      obj.confirmed = timelines.confirmed.timeline[key];
      obj.deaths = timelines.deaths.timeline[key];
      obj.recovered = timelines.recovered.timeline[key];
      arr.push(obj);
    });
    return arr.reverse();
  }
  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.virusDataService
        .getVirusDataByCountry(param["country_code"])
        .subscribe(data => {
          this.countryVirusData = data;
          this.flag = `https://www.countryflags.io/${this.countryVirusData.locations[0].country_code}/flat/64.png`;
        });
    });
  }
}
