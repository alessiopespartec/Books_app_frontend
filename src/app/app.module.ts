import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookListComponent } from './components/books/book-list/book-list.component';

import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { BookDetailComponent } from './components/books/book-detail/book-detail.component';
import { NavbarComponent } from './core/layout/navbar/navbar.component';

import { AuthorListComponent } from './components/authors/author-list/author-list.component';
import { AuthorDetailComponent } from './components/authors/author-detail/author-detail.component';
import { AuthInterceptor } from './core/interceptors/AuthInterceptor';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { PublisherListComponent } from './components/publishers/publisher-list/publisher-list.component';
import { PublisherDetailComponent } from './components/publishers/publisher-detail/publisher-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    NavbarComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    NotFoundPageComponent,
    PublisherListComponent,
    PublisherDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptors([AuthInterceptor])),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
