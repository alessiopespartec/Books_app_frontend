import { createReducer, on } from '@ngrx/store';
import * as BookActions from './books.actions';

export interface State {
  books: any[];
  selectedBook: any | null;
  error: any;
}

export const initialState: State = {
  books: [],
  selectedBook: null,
  error: null,
};

export const booksReducer = createReducer(
  initialState,
  on(BookActions.loadBooksSuccess, (state, { books }) => ({
    ...state,
    books,
    error: null, // Resetta l'errore quando il caricamento ha successo
  })),
  on(BookActions.loadBooksFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(BookActions.loadBookDetailsSuccess, (state, { book }) => ({
    ...state,
    selectedBook: book,
    error: null, // Resetta l'errore quando il caricamento dei dettagli ha successo
  })),
  on(BookActions.loadBookDetailsFailure, (state, { error }) => ({
    ...state,
    selectedBook: null, // Pulisci il libro selezionato in caso di errore
    error,
  }))
);
