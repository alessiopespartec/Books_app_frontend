import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../../core/services/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.css',
})
export class AuthorListComponent implements OnInit {
  data: any;

  constructor(private service: AuthorService) {}

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
        error: (err: {}) => {
          console.error('Ops, error deleting author: ', err);
        },
      });
    }
  }
}
