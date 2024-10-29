import { Component, effect, inject, Inject, Input, OnInit, signal } from '@angular/core';
import { MyBtnComponent } from '../my-btn/my-btn.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  MatCheckboxChange,
  MatCheckboxModule,
} from '@angular/material/checkbox';
import { TodoItemInterface } from '../../shared/models/todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoService } from '../../shared/services/todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    MyBtnComponent,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    TodoItemComponent
  ],
  providers: [TodoService],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {

  private todoService: TodoService = inject(TodoService)

  todos = signal<TodoItemInterface[]>([])
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.todoService.getTodos()
    .then((res: any) => this.todos.set(res));
  }

  todoEffect = effect(() => {
    console.log(this.todos());
    this.todoList = this.todos()
  })

  protected todoList: TodoItemInterface[] = [];
  todoInput: string = '';

  addTodoHandler() {
    if (this.todoInput.length != 0) {
      this.todoList?.push({ id: new Date().getTime() , title: this.todoInput, isDone: false, createdAt: new Date() });
      this.todoInput = '';
      document
        .getElementById('#todo-input')
        ?.classList.toggle('border-red-300', false);
    } else {
      document
        .getElementById('#todo-input')
        ?.classList.toggle('border-red-300', true);
    }
    console.log(this.todoList);
  }

  onDleteTodoHandler(id: number) {
    console.log(id);
    this.todoList = this.todoList.filter(todo => todo.id != id)
  }
  onCheckTodoHandler(item: TodoItemInterface) {
    console.log(item.isDone);
    this.todoList.map(todoItem => {
      if (todoItem.id === item.id) {
        todoItem.isDone = item.isDone
      }
    })
    console.log(this.todoList);
    
  }
}
