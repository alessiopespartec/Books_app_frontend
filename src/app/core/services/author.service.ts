import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private url = environment.apiBaseUrl + '/authors';
  private username: string = environment.auth.username;
  private password: string = environment.auth.password;

  private httpHeaders = new HttpHeaders({
    Authorization: 'Basic ' + btoa(`${this.username}:${this.password}`),
  });

  constructor(private http: HttpClient) {}

  getAllAuthors() {
    console.log('Getting all authors from ', this.url);
    return this.http.get(this.url, { headers: this.httpHeaders });
  }

  getAuthorById(id: string | number) {
    console.log('Getting author from ', this.url + '/' + id);
    return this.http.get(this.url + '/' + id, { headers: this.httpHeaders });
  }
}
