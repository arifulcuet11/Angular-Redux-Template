import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addBook, removeBook, retrievedBookList } from 'src/app/store/action/books.action';
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
    private store: Store
  ) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
  }

}
