import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private url = environment.apiBaseUrl + '/authors';

  constructor(private http: HttpClient) {}

  getAllAuthors() {
    console.log('Getting all authors from ', this.url);
    return this.http.get(this.url);
  }

  getAuthorById(id: string | number) {
    console.log('Getting author from ', this.url + '/' + id);
    return this.http.get(this.url + '/' + id);
  }

  createAuthor(authorData: any): Observable<any> {
    return this.http.post(this.url, authorData);
  }

  updateAuthor(id: string | number, authorData: any): Observable<any> {
    console.log('Sending this data: ', authorData);
    return this.http.put(`${this.url}/${id}`, authorData);
  }

  deleteAuthor(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
