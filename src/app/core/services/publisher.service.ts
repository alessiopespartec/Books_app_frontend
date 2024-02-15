import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  private url: string = environment.apiBaseUrl + '/publishers';

  constructor(private http: HttpClient) {}

  getAllPublishers() {
    console.log('Getting all publishers from ', this.url);
    return this.http.get(this.url);
  }

  getPublisherById(id: string | number) {
    console.log('Getting publisher from ', this.url + '/' + id);
    return this.http.get(this.url + '/' + id);
  }
}
