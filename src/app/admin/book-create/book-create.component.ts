import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  constructor(
    private router: Router,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
  }
  
  onSubmit(book: any) {
    this.bookService.create(book).subscribe(_ => {
      this.router.navigate(['/admin']);
    }, err => console.error(err));
  }
}
