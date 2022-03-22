import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from '../store/reducers/books.reducer';
import { collectionReducer } from '../store/reducers/collection.reducer';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent
  }
];
@NgModule({
  declarations: [
    BookListComponent,
    BookComponent,
    BookCollectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class BookModule { }
