import { Book } from "../book/book.model";
import { LayoutModel } from "../layout/models/layout.model";

export interface AppState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
  layout: LayoutModel
}

