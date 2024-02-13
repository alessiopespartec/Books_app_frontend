import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

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

  getBooks(): Observable<any> {
    console.log('Fetching all books');
    return this.http.get(this.url, { headers: this.httpHeaders });
  }

  getBookById(bookId: string | number): Observable<any> {
    const newUrl = `${this.url}/${bookId}`;
    console.log(`Fetching book by ID: ${bookId}`);
    return this.http.get(newUrl, { headers: this.httpHeaders });
  }
}
