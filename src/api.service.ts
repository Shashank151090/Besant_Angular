import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }
  getUsers() {
    const _URL = this.baseUrl + 'users';
    return this.http.get(_URL);
  }

  getData() { // using pipe and map for data manupulation
    return this.http.get(this.baseUrl + 'users').pipe(
      map(data => {
        for (const datas of (data as Array<any>)) {
          if (datas.id === 2) {
            datas.name = 'Hey, ' + datas.name;
          }
        }
        return data;
      }),
    );
  }

  getPosts() {
    const _URL = this.baseUrl + 'posts';
    return this.http.get(_URL);
  }
  getUserPosts(id) {
    const _URL = this.baseUrl + 'posts/' + id;
    return this.http.get(_URL);
  }
  getUserComments(id) {
    const _URL = this.baseUrl + 'comments?postId=' + id;
    return this.http.get(_URL);
  }
}
