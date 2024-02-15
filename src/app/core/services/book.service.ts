import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private url: string = environment.apiBaseUrl + '/books';

  constructor(private http: HttpClient) {}

  getAllBooks() {
    console.log('Getting all books from ', this.url);
    return this.http.get(this.url);
  }

  getBookById(id: string | number) {
    console.log('Getting book from ', this.url + '/' + id);
    return this.http.get(this.url + '/' + id);
  }
}
