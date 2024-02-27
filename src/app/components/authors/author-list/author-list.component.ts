import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../../core/services/author.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.css',
})
export class AuthorListComponent implements OnInit {
  data: any;

  showError: boolean = false;
  errorMessage: string = '';

  constructor(
    public authService: AuthService,
    private service: AuthorService
  ) {}

  ngOnInit(): void {
    this.service.getAllAuthors().subscribe({
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
    if (window.confirm('Do you really want to delete this author?')) {
      this.service.deleteAuthor(id).subscribe({
        next: (res: {}) => {
          console.log(`Author with ID ${id} deleted successfully!`);
          console.log(res);
          window.location.reload();
        },
        error: (err: any) => {
          console.error('Ops, error deleting author: ', err);
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
