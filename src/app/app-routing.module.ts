import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/books/book-list/book-list.component';
import { BookDetailComponent } from './components/books/book-detail/book-detail.component';
import { AuthorListComponent } from './components/authors/author-list/author-list.component';
import { AuthorDetailComponent } from './components/authors/author-detail/author-detail.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { PublisherListComponent } from './components/publishers/publisher-list/publisher-list.component';
import { PublisherDetailComponent } from './components/publishers/publisher-detail/publisher-detail.component';

export const routes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: 'authors', component: AuthorListComponent },
  { path: 'authors/:id', component: AuthorDetailComponent },
  { path: 'publishers', component: PublisherListComponent },
  { path: 'publishers/:id', component: PublisherDetailComponent },
  { path: '**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
