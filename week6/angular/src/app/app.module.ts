import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { RatingEmployeeComponent } from './employee/rating-employee/rating-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    RatingEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
