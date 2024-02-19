import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookService } from '../../../core/services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../../../core/services/author.service';
import { PublisherService } from '../../../core/services/publisher.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css',
})
export class BookEditComponent {
  bookForm: FormGroup;
  bookId: string | number | null = null;
  authorsList: any[] = [];
  publishersList: any[] = [];

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router,
    private authorService: AuthorService,
    private publisherService: PublisherService
  ) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      year: ['', Validators.required],
      authorIds: ['', Validators.required],
      publisherId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadAuthorsAndPublishers();
    this.bookId = this.route.snapshot.params['id'];

    // If ID exists => EDIT MODE
    if (this.bookId) {
      this.bookService.getBookById(this.bookId).subscribe({
        next: (res: any) => {
          const book = res.data;
          this.bookForm.patchValue({
            title: book.title ?? '',
            year: book.year ?? '',
            authorIds: book.authors.map((author: any) => author.id),
            publisherId: book.publisher.id,
          });
        },
        error: () => {
          this.router.navigate(['/not-found']).then(() => {
            window.location.reload();
          });
        },
      });
    }
  }

  loadAuthorsAndPublishers(): void {
    this.authorService.getAllAuthors().subscribe({
      next: (res: any) => (this.authorsList = res.data),
      error: (err: {}) => console.error('Error gettig author list', err),
    });
    this.publisherService.getAllPublishers().subscribe({
      next: (res: any) => (this.publishersList = res.data),
      error: (err: {}) => console.error('Error gettig author list', err),
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const formValue = this.bookForm.value;

      let authorsPayload;
      if (Array.isArray(formValue.authorIds)) {
        authorsPayload = formValue.authorIds.map((id: any) => ({ id }));
      } else {
        authorsPayload = [{ id: formValue.authorIds }];
      }

      let payload = {
        title: formValue.title,
        year: formValue.year,
        authors: authorsPayload,
        publisher: { id: formValue.publisherId },
      };

      if (this.bookId) {
        // If ID exists => EDIT MODE
        this.bookService.updateBook(this.bookId, payload).subscribe({
          next: () => this.handleSuccess(),
          error: (err: {}) => console.log('Ops, error here: ', err),
        });
      } else {
        // If ID does not exist => CREATE MODE
        this.bookService.createBook(payload).subscribe({
          next: () => this.handleSuccess(),
          error: (err: {}) => console.error('Ops, error here: ', err),
        });
      }
    }
  }

  handleSuccess(): void {
    console.log('Book created or updated successfully!');
    this.router.navigate(['/books']).then(() => {
      window.location.reload();
    });
  }
}
