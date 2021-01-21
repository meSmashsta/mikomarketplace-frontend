import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: any;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private bookService: BookService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.paramMap;
    const bookId = String(routeParams.get('id'));

    this.bookService.get(bookId).subscribe(book => {
      this.book = book;
    });
  }

  addToCart(book: any) {
    this.cartService.add(book);
    this.router.navigate(['/cart']);
  }

}
