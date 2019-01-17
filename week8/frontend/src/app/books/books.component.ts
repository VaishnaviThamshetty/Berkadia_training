import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books = [
    "Thriller",
  ]
  constructor(private _bookService: BookService) { }

  ngOnInit() {
    this._bookService.getBooks()
      .subscribe(
        res => this.books = res,
        err => console.log(err)
      )
  }

}
