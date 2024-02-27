import { APP_INITIALIZER, NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { BookEditComponent } from './components/books/book-edit/book-edit.component';
import { AuthorEditComponent } from './components/authors/author-edit/author-edit.component';
import { PublisherEditComponent } from './components/publishers/publisher-edit/publisher-edit.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './init/keycloak-init.factory';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';

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
    LoginComponent,
    UserListComponent,
    BookEditComponent,
    AuthorEditComponent,
    PublisherEditComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    KeycloakAngularModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    provideClientHydration(),
    // provideHttpClient(withInterceptors([AuthInterceptor])),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
