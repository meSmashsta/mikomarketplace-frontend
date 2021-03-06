import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @Input() book: any;

  @Output() submitEvent = new EventEmitter();

  bookForm = this.formBuilder.group({
    title: '',
    isbpn: '',
    author: '',
    description: '',
    category: '',
    edition: '',
    publisher: '',
    publishedDate: '',
    officialUrl: '',
    price: 0
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log(this.book);
    if (this.book) {
      this.bookForm.patchValue(this.book)
    }
  }

  onSubmit() {
    if (! this.bookForm.invalid) {
      this.submitEvent.emit(this.bookForm.value);
    }
  }
}
