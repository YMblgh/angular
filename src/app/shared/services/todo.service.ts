import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url = 'https://660453ae2393662c31d12ede.mockapi.io/todos'


  constructor(private http: HttpClient) { }

  getTodos(queryParams?: any) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url).subscribe({
        next: (res: any) => {
          resolve(res)
        },
        error: (res) => {
          reject(res)
        }
      })
    })
  }
}
