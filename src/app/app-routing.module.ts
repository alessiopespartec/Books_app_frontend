import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/books/book-list/book-list.component';
import { BookDetailComponent } from './components/books/book-detail/book-detail.component';
import { AuthorListComponent } from './components/authors/author-list/author-list.component';
import { AuthorDetailComponent } from './components/authors/author-detail/author-detail.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { PublisherListComponent } from './components/publishers/publisher-list/publisher-list.component';
import { PublisherDetailComponent } from './components/publishers/publisher-detail/publisher-detail.component';
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { BookEditComponent } from './components/books/book-edit/book-edit.component';
import { AuthorEditComponent } from './components/authors/author-edit/author-edit.component';
import { PublisherEditComponent } from './components/publishers/publisher-edit/publisher-edit.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';

export const routes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'books/new', component: BookEditComponent },
  { path: 'books/edit/:id', component: BookEditComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: 'authors', component: AuthorListComponent },
  { path: 'authors/new', component: AuthorEditComponent },
  { path: 'authors/edit/:id', component: AuthorEditComponent },
  { path: 'authors/:id', component: AuthorDetailComponent },
  { path: 'publishers', component: PublisherListComponent },
  { path: 'publishers/new', component: PublisherEditComponent },
  { path: 'publishers/edit/:id', component: PublisherEditComponent },
  { path: 'publishers/:id', component: PublisherDetailComponent },
  { path: 'users', component: UserListComponent },
  { path: 'myprofile', component: UserDetailComponent },
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  //{ path: 'login', component: LoginComponent },
  { path: 'not-found', component: NotFoundPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
