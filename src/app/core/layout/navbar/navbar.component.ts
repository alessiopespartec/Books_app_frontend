import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  get isLoggedIn(): boolean {
    return !!localStorage.getItem('isLoggedIn');
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
  }
}
