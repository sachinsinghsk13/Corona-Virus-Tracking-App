import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationWiseVirusDataTableComponent } from './location-wise-virus-data-table/location-wise-virus-data-table.component';
import { CountryVirusDataComponent } from './country-virus-data/country-virus-data.component';


const routes: Routes = [
  {path:'locations',component: LocationWiseVirusDataTableComponent},
  {path:'locations/:country_code', component: CountryVirusDataComponent},
  {path:'',redirectTo:'/locations',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
