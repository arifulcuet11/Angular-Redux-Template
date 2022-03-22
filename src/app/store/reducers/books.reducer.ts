import { createReducer, on } from '@ngrx/store';
import { Book } from 'src/app/book/book.model';
import { retrievedBookList } from '../action/books.action';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { books }) => books)
);
