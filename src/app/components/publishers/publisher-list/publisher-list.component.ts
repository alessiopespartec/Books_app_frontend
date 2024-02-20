import { Component, OnInit } from '@angular/core';
import { PublisherService } from '../../../core/services/publisher.service';

@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrl: './publisher-list.component.css',
})
export class PublisherListComponent implements OnInit {
  data: any;

  constructor(private service: PublisherService) {}

  ngOnInit(): void {
    this.service.getAllPublishers().subscribe({
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
    if (window.confirm('Do you really want to delete this publisher?')) {
      this.service.deletePublisher(id).subscribe({
        next: (res: {}) => {
          console.log(`Publisher with ID ${id} deleted successfully!`);
          console.log(res);
          window.location.reload();
        },
        error: (err: {}) => {
          console.error('Ops, error deleting publisher: ', err);
        },
      });
    }
  }
}
