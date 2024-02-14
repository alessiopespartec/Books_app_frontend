import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private url = environment.apiBaseUrl + '/books';
  private username: string = environment.auth.username;
  private password: string = environment.auth.password;

  private httpHeaders = new HttpHeaders({
    Authorization: 'Basic ' + btoa(`${this.username}:${this.password}`),
  });

  constructor(private http: HttpClient) {}

  getAllBooks() {
    console.log('Getting all books from ', this.url);
    return this.http.get(this.url, { headers: this.httpHeaders });
  }

  getBookById(id: string | number) {
    console.log('Getting book from ', this.url + '/' + id);
    return this.http.get(this.url + '/' + id, { headers: this.httpHeaders });
  }
}