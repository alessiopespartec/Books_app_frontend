import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
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

  createPublisher(publisherData: any): Observable<any> {
    return this.http.post(this.url, publisherData);
  }

  updatePublisher(id: string | number, publisherData: any): Observable<any> {
    console.log('Sending this data: ', publisherData);
    return this.http.put(`${this.url}/${id}`, publisherData);
  }

  deletePublisher(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
