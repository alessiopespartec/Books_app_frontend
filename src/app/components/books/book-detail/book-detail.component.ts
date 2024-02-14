import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../core/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css',
})
export class BookDetailComponent implements OnInit {
  id = this.router.snapshot.paramMap.get('id');
  data: any;

  constructor(private router: ActivatedRoute, private service: BookService) {}

  ngOnInit(): void {
    if (this.id == null) {
      console.log('ID cannot be null');
      return;
    }
    this.service.getBookById(this.id).subscribe(
      (res) => {
        console.log('Data: ', res);
        this.data = res;
      },
      (err) => {
        console.log('Error here: ', err);
      },
      () => console.log('Getting data completed!')
    );
  }
}
