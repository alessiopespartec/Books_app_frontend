import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../core/services/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css',
})
export class BookDetailComponent implements OnInit {
  id!: null | string;
  data: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: BookService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    if (this.id == null) {
      console.log('ID cannot be null');
      return;
    }

    this.service.getBookById(this.id).subscribe({
      next: (res: {}) => {
        console.log('Data: ', res);
        this.data = res;
      },
      error: (err: {}) => {
        console.log('Error here: ', err);
        this.data = err;
        /*
        this.router.navigate(['/not-found']).then(() => {
          window.location.reload();
        });
        */
      },
    });
  }
}
