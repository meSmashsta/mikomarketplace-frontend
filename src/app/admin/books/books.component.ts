import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:any = [];

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.bookService.all().subscribe(books => {
      this.books = books;
    });
  }

}
