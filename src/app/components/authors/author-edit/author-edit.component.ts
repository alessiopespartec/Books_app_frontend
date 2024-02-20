import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorService } from '../../../core/services/author.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrl: './author-edit.component.css',
})
export class AuthorEditComponent implements OnInit {
  authorForm: FormGroup;
  authorId: string | number | null = null;

  constructor(
    private fb: FormBuilder,
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.authorForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.authorId = this.route.snapshot.params['id'];

    // If ID exists => EDIT MODE
    if (this.authorId) {
      this.authorService.getAuthorById(this.authorId).subscribe({
        next: (res: any) => {
          const author = res.data;
          this.authorForm.patchValue({
            firstName: author.firstName ?? '',
            lastName: author.lastName ?? '',
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
    this.authorForm.markAllAsTouched();

    if (this.authorForm.valid) {
      const formValue = this.authorForm.value;
      let payload = {
        firstName: formValue.firstName,
        lastName: formValue.lastName,
      };

      if (this.authorId) {
        // If ID exists => EDIT MODE
        this.authorService.updateAuthor(this.authorId, payload).subscribe({
          next: () => this.handleSuccess(),
          error: (err: any) => console.error('Ops, error here: ', err),
        });
      } else {
        // If ID does not exist => CREATE MODE
        this.authorService.createAuthor(payload).subscribe({
          next: () => this.handleSuccess(),
          error: (err: any) => console.error('Ops, error here: ', err),
        });
      }
    }
  }

  handleSuccess(): void {
    console.log('Author created or updated successfully!');
    this.router.navigate(['/authors']).then(() => {
      window.location.reload();
    });
  }
}
