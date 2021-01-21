import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  API = "http://localhost:3000/book";

  constructor(private http: HttpClient) { }

  public all() {
    return this.http.get(this.API);
  }

  public get(id: string) {
    return this.http.get(this.API + '/detail/' + id);
  }

  public update(id: String, book: any) {
    return this.http.patch(this.API + '/update/' + id, book);
  }
}
