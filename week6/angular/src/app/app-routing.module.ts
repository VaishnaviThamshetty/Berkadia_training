import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { RatingEmployeeComponent } from './employee/rating-employee/rating-employee.component';

const routes: Routes = [
  {path: 'list' ,component: ListEmployeeComponent},
  {path: 'rating' ,component: RatingEmployeeComponent},
  {path: '' ,redirectTo:'/list', pathMatch:'full'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
