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
}
