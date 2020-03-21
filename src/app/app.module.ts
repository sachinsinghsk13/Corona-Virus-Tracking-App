import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalStatisticsDataComponent } from './global-statistics-data/global-statistics-data.component';
import { LocationWiseVirusDataTableComponent } from './location-wise-virus-data-table/location-wise-virus-data-table.component';
import { CountryVirusDataComponent } from './country-virus-data/country-virus-data.component';
import { LocationWiseVirusDataTableRowsComponent } from './location-wise-virus-data-table-rows/location-wise-virus-data-table-rows.component';
import { LocationWiseVirusDataTableRowComponent } from './location-wise-virus-data-table-row/location-wise-virus-data-table-row.component';
import { ProvinceVirusDataTimelineComponent } from './province-virus-data-timeline/province-virus-data-timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalStatisticsDataComponent,
    LocationWiseVirusDataTableComponent,
    CountryVirusDataComponent,
    LocationWiseVirusDataTableRowsComponent,
    LocationWiseVirusDataTableRowComponent,
    ProvinceVirusDataTimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
