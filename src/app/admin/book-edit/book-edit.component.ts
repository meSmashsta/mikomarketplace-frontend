import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  bookId: any;
  book: any;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.paramMap;
    this.bookId = String(routeParams.get('id'));
    
    this.bookService.get(this.bookId).subscribe(book => {
      this.book = book;
    });
  }

  onSubmit(book: any) {
    this.bookService.update(this.bookId, book).subscribe(response => {
      console.log(response);
      this.router.navigate(['/admin']);
    }, err => {
      console.error(err);
    });
  }
}
