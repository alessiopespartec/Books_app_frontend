import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../core/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent implements OnInit {
  data: any;

  constructor(private service: BookService) {}

  ngOnInit(): void {
    this.service.getAllBooks().subscribe({
      next: (res: {}) => {
        console.log('Getting Data: ', res);
        this.data = res;
      },
      error: (err: {}) => {
        console.log('Error here: ', err);
      },
    });
  }

  navigateToAddBookPage() {
    console.log('To Add Book Page clicked!');
  }

  onBookClick(id: number) {
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
