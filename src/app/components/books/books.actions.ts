import { createAction, props } from '@ngrx/store';

// Books Actions
export const loadBooks = createAction('[Book List] Load Books');
export const loadBooksSuccess = createAction(
  '[Book List] Load Books Success',
  props<{ books: any[] }>()
);
export const loadBooksFailure = createAction(
  '[Book List] Load Books Failure',
  props<{ error: any }>()
);

// Book Actions
export const loadBookDetails = createAction(
  '[Book Detail] Load Book Details',
  props<{ bookId: string | number }>()
);
export const loadBookDetailsSuccess = createAction(
  '[Book Detail] Load Book Details Success',
  props<{ book: any }>()
);
export const loadBookDetailsFailure = createAction(
  '[Book Detail] Load Book Details Failure',
  props<{ error: any }>()
);
