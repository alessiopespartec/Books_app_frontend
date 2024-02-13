import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../core/services/book.service';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as BookActions from '../books.actions';
import { selectSelectedBook } from '../books.selectors';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css',
})
export class BookDetailComponent implements OnInit {
  book$!: Observable<any>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): any {
    const bookId = this.route.snapshot.paramMap.get('id');

    if (bookId !== null) {
      this.store.dispatch(BookActions.loadBookDetails({ bookId: bookId }));
    } else {
      console.error('Book ID is null');
    }

    this.book$ = this.store.select(selectSelectedBook);
  }

  /*
  loadBook(bookId: string | number) {
    this.bookService.getBookById(bookId).subscribe(
      (res) => {
        this.book = res.data;
        console.log('Data', res.data);
      },
      (error) => {
        console.log('Ops, error here:', error);
      }
    );
  }

  loadBooks() {
    this.bookService.getBooks().subscribe(
      (res) => {
        this.book = res.data;
        console.log('Data', res.data[0]);
      },
      (error) => {
        console.log('Ops, error here:', error);
      },
      () => {
        console.log('Getting data... completed!');
      }
    );
  }
  */
}
