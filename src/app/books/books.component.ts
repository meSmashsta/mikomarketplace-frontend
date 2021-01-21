import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:any = [];
  displayedColumns = ['title', 'description', 'author', 'category', 'price', 'actions' ];

  constructor(
    private router: Router,
    private bookService: BookService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.bookService.all().subscribe(books => {
      this.books = books;
    });
  }

  addToCart(book: any) {
    this.cartService.add(book);
    this.router.navigate(['/cart']);
  }

}
