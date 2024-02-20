import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PublisherService } from '../../../core/services/publisher.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-publisher-edit',
  templateUrl: './publisher-edit.component.html',
  styleUrls: ['./publisher-edit.component.css'],
})
export class PublisherEditComponent implements OnInit {
  publisherForm: FormGroup;
  publisherId: string | number | null = null;

  constructor(
    private fb: FormBuilder,
    private publisherService: PublisherService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.publisherForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.publisherId = this.route.snapshot.params['id'];

    if (this.publisherId) {
      // Edit mode
      this.publisherService.getPublisherById(this.publisherId).subscribe({
        next: (res: any) => {
          const publisher = res.data;
          this.publisherForm.patchValue({
            name: publisher.name ?? '',
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

  onSubmit(): void {
    this.publisherForm.markAllAsTouched();

    if (this.publisherForm.valid) {
      const payload = this.publisherForm.value;

      if (this.publisherId) {
        // Edit mode
        this.publisherService
          .updatePublisher(this.publisherId, payload)
          .subscribe({
            next: () => this.handleSuccess(),
            error: (err: any) => console.error('Ops, error here: ', err),
          });
      } else {
        // Create mode
        this.publisherService.createPublisher(payload).subscribe({
          next: () => this.handleSuccess(),
          error: (err: any) => console.error('Ops, error here: ', err),
        });
      }
    }
  }

  handleSuccess(): void {
    console.log('Publisher created or updated successfully!');
    this.router.navigate(['/publishers']).then(() => {
      window.location.reload();
    });
  }
}
