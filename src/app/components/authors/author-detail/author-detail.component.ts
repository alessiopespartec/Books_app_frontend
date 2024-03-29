import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from '../../../core/services/author.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrl: './author-detail.component.css',
})
export class AuthorDetailComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id');
  data: any;

  constructor(private route: ActivatedRoute, private service: AuthorService) {}

  ngOnInit(): void {
    if (this.id == null) {
      console.log('ID cannot be null');
      return;
    }
    this.service.getAuthorById(this.id).subscribe({
      next: (res: {}) => {
        console.log('Data: ', res);
        this.data = res;
      },
      error: (err: {}) => {
        console.log('Error here: ', err);
      },
    });
  }
}
