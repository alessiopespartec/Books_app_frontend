import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private service: AuthService, private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log('Login Form Data', this.loginForm.value);

    if (this.loginForm.valid) {
      this.service
        .login(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe({
          next: (res) => {
            if (res.success) {
              console.log('Login successful', res);
              this.router.navigate(['/books']).then(() => {
                window.location.reload();
              });
            } else {
              console.error('Login failed', res);
              alert(res.message);
              this.loginForm.reset();
            }
          },
          error: (err: {}) => {
            console.error('Login failed', err);
            this.loginForm.reset();
          },
        });
    }
  }
}
