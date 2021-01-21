import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:any = [];

  constructor(
    private router: Router,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  onClickCreate() {
    this.router.navigate(['/admin/create']);
  }

  onClickEdit(book: any) {
    this.router.navigate(['/admin/edit', book._id]);
  }

  onClickDelete(book: any) {
    this.bookService.delete(book).subscribe(_ => {
      this.fetchBooks();
    }, err => console.error(err));
  }

  fetchBooks() {
    this.bookService.all().subscribe(books => {
      this.books = books;
    });
  }

}
