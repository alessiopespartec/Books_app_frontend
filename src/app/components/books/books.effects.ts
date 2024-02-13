import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { BookService } from '../../core/services/book.service';
import * as BookActions from './books.actions';

@Injectable()
export class BookEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookActions.loadBooks),
      mergeMap(() =>
        this.bookService.getBooks().pipe(
          map((books) => BookActions.loadBooksSuccess({ books })),
          catchError((error) => of(BookActions.loadBooksFailure({ error })))
        )
      )
    )
  );

  loadBookDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookActions.loadBookDetails),
      mergeMap((action) =>
        this.bookService.getBookById(action.bookId).pipe(
          map((book) => BookActions.loadBookDetailsSuccess({ book })),
          catchError((error) =>
            of(BookActions.loadBookDetailsFailure({ error }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private bookService: BookService) {}
}
