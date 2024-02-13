import { State as BooksState } from '../app/components/books/books.reducer';

export interface AppState {
  books: BooksState;
}
