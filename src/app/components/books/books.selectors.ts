import { createSelector } from '@ngrx/store';
import { State } from './books.reducer';

export const selectBooksFeature = (state: any) => state.books;

export const selectBooks = createSelector(
  selectBooksFeature,
  (state: any) => state.books
);

export const selectFeature = (state: any) => state.feature;

export const selectSelectedBook = createSelector(
  selectFeature,
  (state: State) => state.selectedBook
);
