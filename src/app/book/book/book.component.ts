import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppConfig, APP_CONFIG } from 'src/app/app.module';
import { addBook, removeBook, retrievedBookList } from 'src/app/store/action/books.action';
import { AppState } from 'src/app/store/app.state';
import { selectBookCollection, selectBooks } from 'src/app/store/selectors/books.selector';
import { GoogleBooksService } from '../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  books$ = this.store.select(selectBooks);
  bookCollection$:any = this.store.select(selectBookCollection);

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(
    private booksService: GoogleBooksService,
    private store: Store<AppState>,
   @Inject(APP_CONFIG) config: AppConfig
  ) {
    console.table(config);
    this.store.select((state)=> state.collection)
  }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
  }

}
