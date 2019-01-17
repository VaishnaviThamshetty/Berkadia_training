import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _booksUrl = "http://localhost:3000/api/books";
  
  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get<any>(this._booksUrl)
  }

  
}