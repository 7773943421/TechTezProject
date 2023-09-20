import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FakeService {
  apiUrl = "http://localhost:3000/todos";

  //DI 

  constructor(private httpClient: HttpClient) { }

  // Create method 

  create(data: any) : Observable<any> {
    return this.httpClient.post(this.apiUrl, data);
  }

  // read

  list() {
   return this.httpClient.get(this.apiUrl);
  }

  // update

  update(id: any, data: any) {
    let API_URL = `${this.apiUrl}/${id}`;
   return this.httpClient.put(API_URL, data);
  }

  // delete

  delete(id: any) {
    let API_URL = `${this.apiUrl}/${id}`;
    return this.httpClient.delete(API_URL);
  }
  

}
