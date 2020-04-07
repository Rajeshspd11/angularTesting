import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url='http://jsonplaceholder.typicode.com';

  constructor(public httpClient: HttpClient) {
   }

   getData(){
      return this.httpClient.get(`${this.url}/users`);
   }


}
