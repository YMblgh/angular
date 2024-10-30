import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoItemInterface } from '../../shared/models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  url = 'https://660453ae2393662c31d12ede.mockapi.io/todos';

  constructor(private http: HttpClient) {}

  // get all todos
  getTodos(queryParams?: TodoItemInterface) {
    return this.http.get(this.url);
  }

  // get todo
  getTodo(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  // create todo
  createTodo(body: any) {
    return this.http.post(this.url, body);
  }

  // edit todo
  editTodo(body: any) {
    return this.http.put(`${this.url}/${body.id}`, body);
  }

  // delete todo
  deleteTodo(body: any) {
    return this.http.delete(`${this.url}/${body}`);
  }
}
