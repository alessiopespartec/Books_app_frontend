import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';

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
  }
}
