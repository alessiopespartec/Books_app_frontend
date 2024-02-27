import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  createBook(bookData: any): Observable<any> {
    return this.http.post(this.url, bookData);
  }

  updateBook(id: string | number, bookData: any): Observable<any> {
    console.log('Sending this data: ', bookData);
    return this.http.put(`${this.url}/${id}`, bookData);
  }

  deleteBook(id: number): Observable<any> {
    // throw new Error('Method not implemented.');
    return this.http.delete(`${this.url}/${id}`);
  }
}

// TODO: Mettere nel toast il messaggio di "Accesso Negato"
// TODO: Non mostrare gli elementi/pagine per gli utenti che non hanno lo scope adatto.
