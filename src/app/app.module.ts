import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookListComponent } from './components/books/book-list/book-list.component';

import { HttpClientModule } from '@angular/common/http';
import { BookDetailComponent } from './components/books/book-detail/book-detail.component';
import { NavbarComponent } from './core/layout/navbar/navbar.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { booksReducer } from './components/books/books.reducer';
import { BookEffects } from './components/books/books.effects';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    StoreModule.forRoot({ books: booksReducer }),
    EffectsModule.forRoot([BookEffects]),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
