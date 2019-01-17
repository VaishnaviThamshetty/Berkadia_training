import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent } from './register/register.component';
import {AuthGuard} from './auth.guard';
import {HomeComponent} from './home/home.component';
import {  BookingComponent} from './booking/booking.component';
import {EndComponent} from './end/end.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch:'full'
  },
  {
    path : 'home',
    component: HomeComponent
  },
  {
    path : 'books',
    component: BooksComponent
  },
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent 
  },
  {
    path:'booking',
    component:  BookingComponent
  },
  {
    path:'end',
    component:  EndComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }