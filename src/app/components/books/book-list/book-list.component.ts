import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../core/services/book.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as BookActions from '../books.actions';
import { selectBooks } from '../books.selectors';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent implements OnInit {
  books$!: Observable<any>;

  constructor(
    private bookService: BookService,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit() {
    this.store.dispatch(BookActions.loadBooks());
    this.books$ = this.store.select(selectBooks);
  }

  /*
  loadBooks() {
    this.bookService.getBooks().subscribe(
      (res) => {
        this.books = res.data;
        console.log('Data', res.data);
      },
      (error) => {
        console.log('Ops, error here:', error);
      }
    );
  }
  */

  navigateToAddBookPage() {
    console.log('To Add Book Page clicked!');
  }

  onBookClick(id: number) {
    this.router.navigate(['/books', id]);

    console.log('Book clicked on ID: ', id);
  }

  onAuthorClick(id: number) {
    console.log('Author clicked on ID: ', id);
  }

  onPublisherClick(id: number) {
    console.log('Publisher clicked on ID: ', id);
  }

  onEditClick(id: number) {
    console.log('Edit button clicked on ID: ', id);
  }

  onDeleteClick(id: number) {
    console.log('Delete button clicked on ID: ', id);
  }
}
