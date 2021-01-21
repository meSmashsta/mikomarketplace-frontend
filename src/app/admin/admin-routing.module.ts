import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'admin/books', component: BooksComponent },
  { path: 'admin/create', component: BookCreateComponent },
  { path: 'admin/edit', component: BookEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
