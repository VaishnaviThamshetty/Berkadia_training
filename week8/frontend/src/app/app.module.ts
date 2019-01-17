import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule ,  HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { EndComponent } from './end/end.component';
import { BookingComponent } from './booking/booking.component';
import {AuthGuard} from './auth.guard';
import {AuthService} from './auth.service';
import {BookService} from './book.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    BooksComponent,
    EndComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard,BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
