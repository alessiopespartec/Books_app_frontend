import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../core/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent implements OnInit {
  data: any;

  showError: boolean = false;
  errorMessage: string = '';

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

  onDeleteClick(id: number) {
    console.log('Delete button clicked on ID: ', id);
    if (window.confirm('Do you really want to delete this book?')) {
      this.service.deleteBook(id).subscribe({
        next: (res: {}) => {
          console.log(`Book with ID ${id} deleted successfully!`);
          console.log(res);
          window.location.reload();
        },
        error: (err: any) => {
          console.error('Ops, error deleting book: ', err);
          this.errorMessage = err.error.message || 'An unknown error occurred';
          this.showError = true;
        },
      });
    }
  }

  closeAlert() {
    this.showError = false;
  }
}
