import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublisherService } from '../../../core/services/publisher.service';

@Component({
  selector: 'app-publisher-detail',
  templateUrl: './publisher-detail.component.html',
  styleUrl: './publisher-detail.component.css',
})
export class PublisherDetailComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id');
  data: any;

  constructor(
    private route: ActivatedRoute,
    private service: PublisherService
  ) {}

  ngOnInit(): void {
    if (this.id == null) {
      console.log('ID cannot be null');
      return;
    }
    this.service.getPublisherById(this.id).subscribe({
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
