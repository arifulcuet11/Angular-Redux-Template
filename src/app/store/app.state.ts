import { Book } from "../book/book.model";

export interface AppState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
}

