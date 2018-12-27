import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { LocationsComponent } from './locations/locations.component';
import { CountriesComponent } from './countries/countries.component';

const routes: Routes = [
  {path:'cities',component:CitiesComponent},
  {path:'locations',component:LocationsComponent},
  {path:'countries',component:CountriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
