import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  data: any;

  constructor(private router: Router, private service: UserService) {}

  ngOnInit(): void {
    this.service.getAllUsers().subscribe({
      next: (res: {}) => {
        console.log('Getting data: ', res);
        this.data = res;
      },
      error: (err: {}) => {
        console.error('Error here: ', err);
      },
    });

    // Implementare il match dei ruoli con gli ID
  }
}
